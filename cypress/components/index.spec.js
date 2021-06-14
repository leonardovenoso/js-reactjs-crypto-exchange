import { mount } from '@cypress/react';
import CryptoExchange from '../../pages/index';

describe('index', () => {
  beforeEach(() => {
    mount(<CryptoExchange />);
  });

  it('has a title', () => {
    cy.contains('Crypto Exchange');
  });

  it('has a dropdown list with 7 bank accounts', () => {
    cy.get('[data-cy=bank-accounts]').children().should('have.length', 7);
  });
});
