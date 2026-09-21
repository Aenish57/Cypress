import { validCheckoutSelector } from "../support/selector";

describe('Checkout functionality', () => {

    beforeEach(() => {
        cy.visit('/');

        cy.login();

        cy.xpath(validCheckoutSelector.fish_category).click();
        cy.xpath(validCheckoutSelector.angelfish_product).click();
        cy.xpath(validCheckoutSelector.angelfish_item).click();

        cy.xpath(validCheckoutSelector.addToCart_button)  .first() .click();
        cy.xpath(validCheckoutSelector.proceedToCheckout_button) .first() .click();
    });


    it('Verify users can checkout successfully', () => {
        cy.xpath(validCheckoutSelector.continue_button).click();
        cy.xpath(validCheckoutSelector.confirm_button).click();

        cy.xpath(validCheckoutSelector.order_success_message) .should('be.visible');

    });

});