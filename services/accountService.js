import { accountInformation } from './data';

const fetchBankAccounts = async () => {
  const bankAccounts = accountInformation.map(account => ({
    accountNumber: account.accountNumber,
    bankName: account.bankName,
    currency: account.currency,
  }));

  return Promise.resolve({ json: () => Promise.resolve(bankAccounts) });
};

export default fetchBankAccounts;
