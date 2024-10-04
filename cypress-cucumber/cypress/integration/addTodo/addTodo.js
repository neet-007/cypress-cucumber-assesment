import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

let todoTitle;
let todoContent;

Given('I visit the main page while logged in', () => {
    cy.window().then((window) => {
        window.localStorage.setItem('todoUser', '"test@email.com"');
    });

    cy.visit('/');
});

When('I enter title {string} and content {string}', (title, content) => {
    todoTitle = title;
    todoContent = content;
    cy.get('input[name="todoTitle"]').type(todoTitle);
    cy.get('input[name="todoContent"]').type(todoContent);
    cy.get('#addTodo').click();
});

Then('it shows up', () => {
    cy.get('.title-class', { timeout: 10000 }).should('contain', todoTitle);
    cy.get('.content-class', { timeout: 10000 }).should('contain', todoContent);
});
