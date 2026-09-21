import { loginSelector, paymentSelector } from "../support/selector";

describe('Payment functionality', () => {

    it('Verify user can proceed to payment with valid login', () => {

        cy.visit('/');
        cy.login();
        cy.xpath(paymentSelector.fish_category).click();
        cy.xpath(paymentSelector.angelfish_product).click();
        cy.xpath(paymentSelector.angelfish_item).click();
        cy.xpath(paymentSelector.addToCart_button) .first()  .click();
        cy.xpath(paymentSelector.proceedToCheckout_button)  .first() .click();

        cy.xpath(paymentSelector.continue_button)
            .click();

    });


    it('Verify user cannot proceed to payment with invalid login', () => {

        cy.visit('/');
        cy.login('okk', 'wrongpassword');
        cy.get(loginSelector.username_field) .should('be.visible');

    });

});