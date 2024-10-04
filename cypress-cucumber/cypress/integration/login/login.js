import { When, Then } from 'cypress-cucumber-preprocessor/steps'

When('I login', () => {

    cy.visit('/login')

        .get("#email")

        .type("test@email.com")

        .get("#password")

        .type("12345678")

        .get('#login')

        .click()

})

Then('the url is {word}', (url) => {

    cy.url()

        .should('eq', `${Cypress.config().baseUrl}${url}`)

})

Then('I\'m logged in', () => {

    cy.window().its('localStorage.todoUser')

        .should('eq', '"test@email.com"')

})
