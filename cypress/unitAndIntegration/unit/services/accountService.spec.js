import fetchBankAccounts, {
  fetchTransactionsByAccountNumber,
} from '../../../../services/accountService';

describe('Account Service', () => {
  let accountInformation;

  describe('fetchBankAccounts()', () => {
    before(async () => {
      const res = await fetchBankAccounts();
      accountInformation = await res.json();
    });

    it('has 7 bank accounts', () => {
      expect(accountInformation.length).to.be.eql(7);
    });
  });

  describe('fetchTransactionsByAccountNumber', () => {
    describe('when account number is 13311110000', () => {
      it('has 100 transactions', async () => {
        const res = await fetchTransactionsByAccountNumber('13311110000');
        const transactions = await res.json();
        expect(transactions.length).to.be.eql(100);
      });
    });
  });
});
