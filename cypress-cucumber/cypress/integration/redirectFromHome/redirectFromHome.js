import { Given, Then } from 'cypress-cucumber-preprocessor/steps';

Given('I am not logged in and on the home page', () => {
    cy.window().then((window) => {
        window.localStorage.removeItem('todoUser');
    });

    cy.visit('/');
});

Then('I get redirected to /login', () => {
    const expectedUrl = `${Cypress.config().baseUrl}/login`;
    cy.url().should('eq', expectedUrl);
});
