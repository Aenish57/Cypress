

import { cartSelector } from "../support/selector";

describe('add to cart', () => {

    it('Continue shopping after adding item', () => {

        cy.visit('/');
        cy.xpath(cartSelector.enter_store).click();

        cy.xpath(cartSelector.fish_category).click();
        cy.xpath(cartSelector.angelfish_product).click();
        cy.xpath(cartSelector.angelfish_item).click();
        cy.xpath(cartSelector.addToCart_button).first().click();

        cy.visit('/');
        cy.xpath(cartSelector.enter_store).click();
        cy.xpath(cartSelector.dog_category).click();
        cy.xpath(cartSelector.bulldog_product).click();
        cy.xpath(cartSelector.bulldog_item).click();

        cy.xpath(cartSelector.addToCart_button).first().click();

    });


    it('Remove product from cart', () => {

        cy.visit('/');
        cy.xpath(cartSelector.enter_store).click();

        cy.xpath(cartSelector.fish_category).click();
        cy.xpath(cartSelector.angelfish_product).click();
        cy.xpath(cartSelector.angelfish_item).click();

        cy.xpath(cartSelector.addToCart_button).first().click();
        cy.xpath(cartSelector.remove_button).first().click();

    });


    it('Update quantity of product in cart', () => {

        cy.visit('/');
        cy.xpath(cartSelector.enter_store).click();

        cy.xpath(cartSelector.fish_category).click();
        cy.xpath(cartSelector.angelfish_product).click();
        cy.xpath(cartSelector.angelfish_item).click();
        cy.xpath(cartSelector.addToCart_button).first().click();

        // Change quantity from 1 to 2
        cy.get(cartSelector.angelfish_quantity)
            .clear()
            .type('2');
        cy.xpath(cartSelector.updateCart_button)
            .first()
            .click();

    });


    it('Add available product to cart', () => {

        cy.visit('/');
        cy.xpath(cartSelector.enter_store).click();

        cy.xpath(cartSelector.fish_category).click();
        cy.xpath(cartSelector.angelfish_product).click();
        cy.xpath(cartSelector.angelfish_item).click();
        cy.xpath(cartSelector.addToCart_button).first().click();

    });

});