import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import { loginPage } from '../../pages/loginPage';

Given('I am on the login page', () => {
    loginPage.actions.visit();
    loginPage.actions.checkLoginPageUrl();
});

When('I enter login email {string}', (email) => {
    loginPage.elements.loginForm.emailInput().clear().type(email);
});

When('I enter login password {string}', (password) => {
    loginPage.elements.loginForm.passwordInput().clear().type(password);
});

When('I submit the login form', () => {
    loginPage.elements.loginForm.submitButton().click();
});

Then('I should see a success message {string}', (message) => {
    loginPage.elements.successMessage().should('contain.text', message);
});
