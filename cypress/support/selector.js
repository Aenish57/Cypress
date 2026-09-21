export const selector = {

    enter_store: "//a[normalize-space()='Enter the Store']",
    account: '#MenuContent a[href*="Account.action"]',
    username_field: '[name="username"]',

    password_field: '[name="password"]',
    repassword_field: '[name="repeatedPassword"]',
    firstName_field: '[name="account.firstName"]',
    lastName_field: '[name="account.lastName"]',
    email_field: '[name="account.email"]',
    phone_field: '[name="account.phone"]',
    address1_field: '[name="account.address1"]',
    address2_field: '[name="account.address2"]',
    city_field: '[name="account.city"]',
    state_field: '[name="account.state"]',
    zip_field: '[name="account.zip"]',
    country_field: '[name="account.country"]',
    languagePreference_field: '[name="account.languagePreference"]',
};

export const loginSelector = {

    sign_in: "//a[normalize-space()='Sign In']",

    enter_store: "//a[normalize-space()='Enter the Store']",

    login_button: "//a[normalize-space()='Login']",

    username_field: '[name="username"]',

    password_field: '[name="password"]',

    signon_button: '[name="signon"]',

};
// export const cartSelector = {

//     addToCart_button: "//a[normalize-space()='Add to Cart']",

//     remove_button: "//a[normalize-space()='Remove']",

//     updateCart_button: "//input[@value='Update Cart']",

// };

// abc: "//a[normalize-space()='EST-1']",

export const cartSelector = {
    enter_store: "//a[normalize-space()='Enter the Store']",
    fish_category: "//img[contains(@src,'sm_fish.gif')]",
    angelfish_product: "//a[normalize-space()='FI-SW-01']",
    angelfish_item: "//a[normalize-space()='EST-1']",
    dog_category: "//img[contains(@src,'sm_dogs.gif')]",
    bulldog_product: "//a[normalize-space()='K9-BD-01']",
    bulldog_item: "//a[normalize-space()='EST-6']",
    addToCart_button: "//a[normalize-space()='Add to Cart']",
    remove_button: "//a[normalize-space()='Remove']",
    updateCart_button: "//input[@value='Update Cart']",
    angelfish_quantity: "input[name='EST-1']"

};

export const checkoutSelector = {

    fish_category: "//img[contains(@src,'sm_fish.gif')]",
    angelfish_product: "//a[normalize-space()='FI-SW-01']",
    angelfish_item: "//a[normalize-space()='EST-1']",
    addToCart_button: "//a[normalize-space()='Add to Cart']",
    proceedToCheckout_button:
        "//a[normalize-space()='Proceed to Checkout']"

};


export const validCheckoutSelector = {

    fish_category: "//img[contains(@src,'sm_fish.gif')]",
    angelfish_product: "//a[normalize-space()='FI-SW-01']",
    angelfish_item: "//a[normalize-space()='EST-1']",
    addToCart_button: "//a[normalize-space()='Add to Cart']",
    proceedToCheckout_button: "//a[normalize-space()='Proceed to Checkout']",
    continue_button: "//input[@name='newOrder']",
    confirm_button: "//a[normalize-space()='Confirm']",
    order_success_message:
        "//li[contains(text(),'Thank you, your order has been submitted.')]"

};

export const paymentSelector = {

    fish_category: "//img[contains(@src,'sm_fish.gif')]",

    angelfish_product: "//a[normalize-space()='FI-SW-01']",

    angelfish_item: "//a[normalize-space()='EST-1']",

    addToCart_button: "//a[normalize-space()='Add to Cart']",

    proceedToCheckout_button: "//a[normalize-space()='Proceed to Checkout']",

    continue_button: "//input[@value='Continue']",

};