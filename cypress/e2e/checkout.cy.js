import { checkoutSelector, loginSelector } from "../support/selector";

describe('Checkout functionality', () => {

    beforeEach(() => {

        cy.visit('/');

        cy.login('okk', '123');

        cy.xpath(checkoutSelector.fish_category).click();
        cy.xpath(checkoutSelector.angelfish_product).click();
        cy.xpath(checkoutSelector.angelfish_item).click();
        cy.xpath(checkoutSelector.addToCart_button).first().click();
        cy.xpath(checkoutSelector.proceedToCheckout_button).first().click();
    });


    it('Verify users can checkout successfully', () => {

        // Checkout test will be written here

    });


    it('Verify checkout should not proceed with empty first name', () => {

        // Empty first name test will be written here

    });


    it('Verify checkout should not proceed with empty card number', () => {

        // Empty card number test will be written here

    });


    it('Verify checkout should not proceed with empty last name', () => {

        // Empty last name test will be written here

    });


    it('Verify checkout should not proceed with alphabetic zip code', () => {

        // Alphabetic zip code test will be written here

    });


    it('Verify checkout accepts alphabetic zip code', () => {

        // Zip code test will be written here

    });

});
