// import { loginSelector } from "../support/selector";

// describe('login page', () => {
//   it('Verify login functionality', () => {
//     cy.visit('/');
//     // cy.xpath("//a[normalize-space()='Sign In']").click();  
//     // cy.get(loginSelector.username_field).type('okk')
//     // cy.get(loginSelector.password_field).clear().type('123')
//     // cy.get(loginSelector.signon_button).click()
//     cy.login();
//   })

//   it('verify failed login', () => {
//     cy.visit('/');
//     cy.xpath(loginSelector.enter_store).click();

//     cy.xpath(loginSelector.sign_in).click();
//     cy.get(loginSelector.username_field).type('anish')
//     cy.get(loginSelector.password_field).clear().type('wrongpassword')
//     cy.get(loginSelector.signon_button).click()

//   })


// })


import { loginSelector } from "../support/selector";

describe('login page', () => {

    it('Verify login functionality', () => {

        cy.visit('/');

        cy.login();

    });


    it('verify failed login', () => {

        cy.visit('/');
        cy.login('anish', 'wrongpassword');
        cy.get(loginSelector.username_field) .should('be.visible');

    });

});

