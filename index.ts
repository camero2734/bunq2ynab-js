import { MonetaryAccountBank } from "./src/bunq/Api";
import { createClient } from "./src/bunq/client";

import * as YNAB from 'ynab';
import { matchedAccounts, occurenceCount, syncTransactionsForAccount, ynabAccountsByIban } from "./src/sync";

interface EnvironmentVars {
  BUNQ_API_KEY: string;
  YNAB_API_KEY: string;
  ENV?: string;
  bunq2ynab: KVNamespace;
}

export default {
  async scheduled(_controller: ScheduledController, env: EnvironmentVars): Promise<void> {
    try {
      matchedAccounts.clear();
      occurenceCount.clear();
      ynabAccountsByIban.clear();

      const bunq = await createClient(env.BUNQ_API_KEY, env.bunq2ynab, env.ENV === 'development');
      const ynab = new YNAB.API(env.YNAB_API_KEY);
      const budget = (await ynab.budgets.getBudgets()).data.budgets[0];

      // Get all accounts
      const { data: accountsData } = await bunq.user.listAllMonetaryAccountForUser(bunq.userId);
      const accounts = accountsData.flatMap(acts => Object.values(acts) as Required<MonetaryAccountBank>[]);

      // Match YNAB/Bunq accounts
      const ynabAccounts = await ynab.accounts.getAccounts(budget.id);
      for (const bunqAccount of accounts) {
        for (const ynabAccount of ynabAccounts.data.accounts) {
          if (ynabAccount.name === bunqAccount.description) {
            const iban = bunqAccount.alias.find(alias => alias.type === 'IBAN')?.value;
            if (!iban) throw new Error(`Could not find IBAN for ${bunqAccount.description}`);
            ynabAccountsByIban.set(iban, ynabAccount);
          }
        }
      }

      // Get all transactions
      for (const bunqAccount of accounts) {
        if (bunqAccount.status !== 'ACTIVE') continue;
        console.log(`bunqAccount ${bunqAccount.description}`);
        await syncTransactionsForAccount({ bunq, ynab, bunqAccount, ynabBudget: budget });
      }

      console.log("Done!");
    } catch (e) {
      console.log(e, /ERROR/);
      if (e instanceof Response) console.log(await e.text());
      throw e;
    }
  },
} satisfies ExportedHandler<EnvironmentVars>;

