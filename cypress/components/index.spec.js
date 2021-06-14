import { mount } from '@cypress/react';
import CryptoExchange from '../../pages/index';

describe('index', () => {
  beforeEach(() => {
    mount(<CryptoExchange />);
  });

  it('has a title', () => {
    cy.contains('Title');
  });

  it('has a dropdown list with 7 bank accounts', () => {
    cy.get('select').find('option').should('be.eq', 7);
  });
});
