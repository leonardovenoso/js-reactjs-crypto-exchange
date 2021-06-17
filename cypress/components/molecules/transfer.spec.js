import { ThemeProvider } from 'styled-components';
import { mount } from '@cypress/react';
import { darkTheme } from '../../../pages/theme';
import Transfer from '../../../pages/components/molecules/transfer';

describe('Transfer', () => {
  describe('page elements', () => {
    beforeEach(() => {
      mount(
        <ThemeProvider theme={darkTheme}>
          <Transfer />
        </ThemeProvider>
      );
    });

    it('has a modal', () => {
      cy.get('[data-cy=transfer-modal]');
    });

    it('has a title', () => {
      cy.contains('Transfer funds');
    });

    it('has a transfer button disabled', () => {
      cy.get('[data-cy=transfer-btn]').should('be.disabled');
    });

    describe('transfer form', () => {
      beforeEach(() => {
        mount(
          <ThemeProvider theme={darkTheme}>
            <Transfer isOpen />
          </ThemeProvider>
        );
      });

      it('has two dropdowns', () => {
        cy.get('select[data-cy=select-bank-account-from]');
        cy.get('select[data-cy=select-bank-account-to]');
      });

      it('has a transfer button', () => {
        cy.get('[data-cy=transfer-btn]');
      });

      it('has a numeric input button', () => {
        cy.get('input[data-cy=transfer-input]')
          .type('1abs2', { force: true })
          .should('have.value', '012');
      });
    });
  });

  describe('when bank account from is selected', () => {
    beforeEach(() => {
      mount(
        <ThemeProvider theme={darkTheme}>
          <Transfer isOpen />
        </ThemeProvider>
      );
    });

    it('loads bank accounts in select account to dropdown', () => {
      cy.get('[data-cy=select-bank-account-from]').select('13311110000');

      cy.get('[data-cy=select-bank-account-to]')
        .children()
        .should('have.length', 2);
    });

    it('bank account to dropdown does not have account number from', () => {
      cy.get('[data-cy=select-bank-account-from]').select('13311110000');

      cy.get('[data-cy=select-bank-account-to]')
        .children()
        .should('not.contain', '13311110000');
    });
  });

  describe('when bank account from and to are selected', () => {
    beforeEach(() => {
      mount(
        <ThemeProvider theme={darkTheme}>
          <Transfer isOpen />
        </ThemeProvider>
      );
    });

    it('transfer funds button is enabled', () => {
      cy.get('[data-cy=select-bank-account-from]').select('13311110000');
      cy.get('[data-cy=select-bank-account-to]').select('35625270301');
      cy.get('[data-cy=transfer-btn]').should('not.be.disabled');
    });
  });
});
