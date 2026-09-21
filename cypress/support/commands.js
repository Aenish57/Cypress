

import { loginSelector } from "./selector";
Cypress.Commands.add('login', (username = Cypress.env("USERNAME"), password = Cypress.env("PASSWORD")) => {
    // Click Enter the Store
    cy.xpath(loginSelector.enter_store).click();
    // Click Sign In
    cy.xpath(loginSelector.sign_in).click();
    // Enter username
    cy.get(loginSelector.username_field)
        .clear()
        .type(username);
    // Enter password
    cy.get(loginSelector.password_field)
        .clear()
        .type(password);
    // Click Login
    cy.get(loginSelector.signon_button).click();

});
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