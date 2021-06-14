import fetchBankAccounts from '../../../../services/accountService';

describe('Account Service', () => {
  let accountInformation;

  describe('fetchBankAccounts()', () => {
    before(async () => {
      const result = await fetchBankAccounts();
      accountInformation = await result.json();
    });

    it('has 7 bank accounts', () => {
      expect(accountInformation.length).to.be.eql(7);
    });
  });
});
