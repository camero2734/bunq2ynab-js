import * as YNAB from 'ynab';
import { BunqApi } from './bunq/client';
import { MonetaryAccountBank, PaymentListing } from './bunq/Api';

interface SyncParams {
  bunq: BunqApi;
  ynab: YNAB.API;
  bunqAccount: Required<MonetaryAccountBank>;
  ynabBudget: YNAB.BudgetSummary;
}

export const matchedAccounts = new Map<number, YNAB.Account>();
export const occurenceCount = new Map<string, number>();
export const ynabAccountsByIban = new Map<string, YNAB.Account>();

export async function syncTransactionsForAccount(params: SyncParams) {
  const { bunq, ynab, bunqAccount, ynabBudget } = params;

  const ynabAccount = ynabAccountsByIban.get(bunqAccount.alias.find(alias => alias.type === 'IBAN')?.value!);
  if (!ynabAccount) throw new Error(`Could not find YNAB account for ${bunqAccount.description}`);

  const transactions = await bunq.user.listAllPaymentForUserMonetaryAccount(bunq.userId, bunqAccount.id, { query: { count: 15 } } as any);
  const mappedTxs = transactions.data.map(tx => mapBunqToYnabTransaction(tx.Payment, ynabAccount));

  const saveResponse = await ynab.transactions.createTransactions(ynabBudget.id, { transactions: mappedTxs });

  console.log(`Imported ${mappedTxs.length} transactions (${saveResponse.data.duplicate_import_ids?.length} duplicates)`);
}

function mapBunqToYnabTransaction(tx: PaymentListing, ynabAccount: YNAB.Account): YNAB.SaveTransaction {
  if (!tx.amount?.value) throw new Error(`Transaction ${tx.id} has no amount`);
  if (!tx.created) throw new Error(`Transaction ${tx.id} has no created date`);
  if (!tx.counterparty_alias) throw new Error(`Transaction ${tx.id} has no counterparty_alias`);
  if (!tx.id) throw new Error(`Transaction ${tx.id} has no id`);

  const amount = Math.round(+tx.amount.value * 1000); // YNAB uses milliunits
  const date = tx.created.slice(0, 10);
  const payeeName = tx.counterparty_alias.display_name;

  let payeeId: string | undefined;
  if (tx.counterparty_alias.iban) {
    const counterpartyIBAN = tx.counterparty_alias.iban;
    payeeId = ynabAccountsByIban.get(counterpartyIBAN)?.transfer_payee_id || undefined;
  }

  return {
    account_id: ynabAccount.id,
    amount,
    date,
    payee_name: payeeName,
    payee_id: payeeId,
    memo: tx.description?.slice(0, 100),
    cleared: 'cleared',
    import_id: 'bunq.in:' + tx.id,
  };
}
