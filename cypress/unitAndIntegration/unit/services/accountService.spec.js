import fetchAccountInformation from '../../../../services/accountService';

describe('Account Service', () => {
  let accountInformation;

  describe('fetchAccountInformation()', () => {
    before(async () => {
      const result = await fetchAccountInformation();
      accountInformation = await result.json();
    });

    it('has 6 bank accounts', () => {
      expect(accountInformation.length).to.be.eql(6);
    });

    it('verifies that all acounts have money', () => {
      accountInformation.forEach(account =>
        expect(account.amount).to.be.greaterThan(0)
      );
    });

    it('verifies that all the accounts are initiated with 0 transactions', () => {
      accountInformation.forEach(account =>
        expect(account.transactions.length).to.be.eq(0)
      );
    });
  });
});
