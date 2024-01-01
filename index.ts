import { MonetaryAccountBank, MonetaryAccountListing } from "./src/bunq/Api";
import { BunqApi, createClient } from "./src/bunq/client";
interface EnvironmentVars {
  BUNQ_API_KEY: string;
}

export default {
  async fetch(request: Request, env: EnvironmentVars): Promise<Response> {
    try {
      const bc = await createClient(env.BUNQ_API_KEY);

      // Get all accounts
      const { data: accountsData } = await bc.user.listAllMonetaryAccountForUser(bc.userId);
      const accounts = accountsData.flatMap(acts => Object.values(acts) as Required<MonetaryAccountBank>[]);

      // Get all transactions
      for (const account of accounts) {
        if (account.status !== 'ACTIVE') continue;
        console.log(`Account ${account.description}`);
        await syncTransactionsForAccount(bc, account);
      }

      return Response.json({ message: 'ok!' });
    } catch (e) {
      if (e instanceof Response && !e.bodyUsed) return e;
      throw e;
    }
  },
} satisfies ExportedHandler<EnvironmentVars>;

async function syncTransactionsForAccount(bc: BunqApi, account: Required<MonetaryAccountBank>) {
  const transactions = await bc.user.listAllPaymentForUserMonetaryAccount(bc.userId, account.id, { query: { count: 200 } } as any);
  const mappedTxs = transactions.data.map(tx => tx.Payment);

  console.log(`${mappedTxs.length} transactions`);
}
