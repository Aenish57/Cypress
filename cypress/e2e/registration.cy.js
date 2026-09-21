import { selector } from "../support/selector";

describe('registration page', () => {

  const username = `anish_${Date.now().toString().slice(-4)}`;
  const email = `anish_${Date.now().toString().slice(-4)}@gmail.com`;

  beforeEach(() => {

    cy.visit('/');

    // ss

    cy.xpath(selector.enter_store).click();
    cy.get(selector.account).click();
  });

  it('verify registration page', () => {

    cy.get('a').contains('Register Now!').click();

    cy.get(selector.username_field).type('username');
    cy.get(selector.password_field).type('123');
    cy.get(selector.repassword_field).type('123');
    cy.get(selector.firstName_field).type('anish');
    cy.get(selector.lastName_field).type('sah');
    cy.get(selector.email_field).type(email);
    cy.get(selector.phone_field).type('1234567890');
    cy.get(selector.address1_field).type('address1');
    cy.get(selector.address2_field).type('address2');
    cy.get(selector.city_field).type('city');
    cy.get(selector.state_field).type('state');
    cy.get(selector.zip_field).type('123456');
    cy.get(selector.country_field).type('country');
    cy.get(selector.languagePreference_field).select('japanese');

  });

});