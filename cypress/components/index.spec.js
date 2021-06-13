import { mount } from '@cypress/react';
import CryptoExchange from '../../pages/index';

describe('index', () => {
  beforeEach(() => {
    mount(<CryptoExchange />);
  });

  it('has a title', () => {
    cy.contains('Title');
  });

  it('has a subtitle', () => {
    cy.contains('Subtitle');
  });

  it('has a regular text', () => {
    cy.contains('This will be regular');
  });
});
