import { MonetaryAccountBank } from "./src/bunq/Api";
import { createClient } from "./src/bunq/client";

import * as YNAB from 'ynab';
import { matchedAccounts, occurenceCount, syncTransactionsForAccount, ynabAccountsByIban } from "./src/sync";

interface EnvironmentVars {
  BUNQ_API_KEY: string;
  YNAB_API_KEY: string;
  NUMBER_OF_TRANSACTIONS_TO_SYNC?: string;
  ENV?: string;
  bunq2ynab: KVNamespace;
}

export default {
  async scheduled(_controller: ScheduledController, env: EnvironmentVars): Promise<void> {
    try {
      matchedAccounts.clear();
      occurenceCount.clear();
      ynabAccountsByIban.clear();

      const numberOfTransactions = env.NUMBER_OF_TRANSACTIONS_TO_SYNC ? +env.NUMBER_OF_TRANSACTIONS_TO_SYNC : undefined;

      const bunq = await createClient(env.BUNQ_API_KEY, env.bunq2ynab, env.ENV === 'development');
      const ynab = new YNAB.API(env.YNAB_API_KEY);

      // Get all bunq accounts
      const { data: accountsData } = await bunq.user.listAllMonetaryAccountForUser(bunq.userId);
      const accounts = accountsData.flatMap(acts => Object.values(acts) as Required<MonetaryAccountBank>[]);

      // Get all YNAB accounts
      const budget = (await ynab.budgets.getBudgets()).data.budgets[0];
      const ynabAccounts = (await ynab.accounts.getAccounts(budget.id)).data.accounts;

      // Match YNAB/Bunq accounts
      for (const bunqAccount of accounts) {
        if (bunqAccount.status !== 'ACTIVE') continue;

        const ynabAccount = ynabAccounts.find(acc => acc.name === bunqAccount.description);
        if (!ynabAccount) {
          console.log(`Could not find YNAB account for ${bunqAccount.description}`);
          continue;
        }

        const iban = bunqAccount.alias.find(alias => alias.type === 'IBAN')?.value;
        if (!iban) throw new Error(`Could not find IBAN for ${bunqAccount.description}`);
        ynabAccountsByIban.set(iban, ynabAccount);
      }

      // Sync new transactions
      for (const bunqAccount of accounts) {
        if (bunqAccount.status !== 'ACTIVE') continue;
        console.log(`Syncing ${bunqAccount.description}`);
        await syncTransactionsForAccount({ bunq, ynab, bunqAccount, ynabBudget: budget, numberOfTransactions });
      }

      console.log("Done!");
    } catch (e) {
      console.log(e, /ERROR/);
      if (e instanceof Response) console.log(await e.text());
      throw e;
    }
  },
} satisfies ExportedHandler<EnvironmentVars>;

