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

    it('has a dropdown list with 7 bank accounts plus select message', () => {
      cy.get('[data-cy=select-bank-account]')
        .children()
        .should('have.length', 8);
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

    it('renders a table body with 100 rows', () => {
      cy.get('[data-cy=select-bank-account]').select('35625270301');
      cy.get('[data-cy=transactions-body]')
        .children()
        .should('have.length', 100);
    });
  });

  describe('when no bank account is selected', () => {
    beforeEach(() => {
      mount(
        <ThemeProvider theme={darkTheme}>
          <CryptoExchange />
        </ThemeProvider>
      );
    });

    it('suggests to select a bank account', () => {
      cy.get('[data-cy=select-bank-account]').select('Select account');
      cy.contains('Select a bank account');
    });
  });
});
