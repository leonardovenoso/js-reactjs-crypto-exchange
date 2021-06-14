import { ThemeProvider } from 'styled-components';
import { mount } from '@cypress/react';
import { darkTheme } from '../../pages/theme';
import CryptoExchange from '../../pages/index';

describe('index', () => {
  describe('page elements', () => {
    beforeEach(() => {
      mount(
        <ThemeProvider theme={darkTheme}>
          <CryptoExchange />
        </ThemeProvider>
      );
    });

    it('has a title', () => {
      cy.contains('Crypto Exchange');
    });

    it('has a dropdown list with 7 bank accounts', () => {
      cy.get('[data-cy=select-bank-account]')
        .children()
        .should('have.length', 7);
    });
  });

  describe('when a bank account is selected', () => {
    beforeEach(() => {
      mount(
        <ThemeProvider theme={darkTheme}>
          <CryptoExchange />
        </ThemeProvider>
      );
    });

    it('renders a table header', () => {
      cy.get('[data-cy=select-bank-account]').select('13311110000');
      cy.get('[data-cy=transactions-header]').contains('Time');
      cy.get('[data-cy=transactions-header]').contains('Action');
      cy.get('[data-cy=transactions-header]').contains('Description');
      cy.get('[data-cy=transactions-header]').contains('Amount');
      cy.get('[data-cy=transactions-header]').contains('Currency');
    });
  });
});
