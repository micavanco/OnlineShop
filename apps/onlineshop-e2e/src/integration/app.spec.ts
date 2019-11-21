import { getGreeting } from '../support/app.po';

describe('onlineshop', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getGreeting().contains('Welcome to onlineshop!');
  });
});
