const baseURL = 'http://localhost:3000';

describe('home page', () => {
  describe('when the user selects a bank account with transactions', () => {
    xit('shows a table with transactions', () => {
      cy.visit(baseURL);
      cy.get('[data-cy=select-bank-account]').select('13311110000');
      cy.get('[data-cy=transactions-body]')
        .children()
        .should('have.length', 100);
    });
  });

  describe('when the user clicks on transfer btn', () => {
    describe('when the user selects a bank account from', () => {
      it('populates the dropdown list of select bank account to', () => {
        cy.visit(baseURL);
        cy.get('[data-cy=open-transfer-modal]').click();
        cy.get('[data-cy=select-bank-account-from]').select('13311110000');
        cy.get('[data-cy=select-bank-account-to]')
          .children()
          .should('have.length', 2);
      });

      describe('when the user inputs 0 as parameter', () => {
        it('shows insufficient amount message', () => {
          cy.visit(baseURL);
          cy.get('[data-cy=open-transfer-modal]').click();
          cy.get('[data-cy=select-bank-account-from]').select('13311110000');
          cy.get('[data-cy=select-bank-account-to]').select('35625270301');
          cy.get('[data-cy=transfer-btn]').click();
          cy.contains('Amount to transfer should be greater than 0');
        });
      });

      describe('when the user inputs an amount greater than the available amount', () => {
        it('shows insufficient amount message', () => {
          cy.visit(baseURL);
          cy.get('[data-cy=open-transfer-modal]').click();
          cy.get('[data-cy=select-bank-account-from]').select('13311110000');
          cy.get('[data-cy=select-bank-account-to]').select('35625270301');
          cy.get('[data-cy=transfer-input]').type(99999999999);
          cy.get('[data-cy=transfer-btn]').click();
          cy.contains('Insufficient funds');
        });
      });

      describe('when funds are enough', () => {
        it('shows success message', () => {
          cy.visit(baseURL);
          cy.get('[data-cy=open-transfer-modal]').click();
          cy.get('[data-cy=select-bank-account-from]').select('13311110000');
          cy.get('[data-cy=select-bank-account-to]').select('35625270301');
          cy.get('[data-cy=transfer-input]').type(2222);
          cy.get('[data-cy=transfer-btn]').click();
          cy.contains('Transaction successful.');
        });

        it('shows a debit in the transactions table', () => {
          cy.get('[data-cy=select-bank-account]').select('13311110000');
          cy.contains('-2222');
        });

        it('shows a credit in the transactions table', () => {
          cy.get('[data-cy=select-bank-account]').select('35625270301');
          cy.contains('2222');
        });
      });
    });
  });
});
