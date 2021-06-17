import { accountInformation, transfer } from './data';

const fetchBankAccounts = async () => {
  const bankAccounts = accountInformation.map(account => ({
    accountNumber: account.accountNumber,
    amount: account.amount,
    bankName: account.bankName,
    currency: account.currency,
  }));

  return Promise.resolve({ json: () => Promise.resolve(bankAccounts) });
};

export const fetchTransactionsByAccountNumber = async accountNumber => {
  const account = accountInformation.find(
    account => account.accountNumber === accountNumber
  );
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({ json: () => Promise.resolve(account.transactions.reverse()) });
    }, 2300);
  });
};

export const transferCurrency = async (
  bankAccountFrom,
  bankAccountTo,
  amount,
  description
) =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve({
        json: () =>
          Promise.resolve(
            transfer(bankAccountFrom, bankAccountTo, amount, description)
          ),
      });
    }, 1000);
  });

export default fetchBankAccounts;
