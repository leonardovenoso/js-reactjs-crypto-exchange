import { accountInformation } from './data';

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
      resolve({ json: () => Promise.resolve(account.transactions) });
    }, 2300);
  });
};

export default fetchBankAccounts;
