// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//Caching session when login via page visit
Cypress.Commands.add('LoginWithPageSession', (username, password) => {
    cy.visit('https://qa-task.backbasecloud.com/', { auth: { username: username, password: password }})
    cy.get('a[href*="/login"]').click()
    cy.get("input[type=text]").type('cypresstest@test.com')
    cy.get("input[type=password]").type('test')
    cy.get("button[type=submit]").click()
})