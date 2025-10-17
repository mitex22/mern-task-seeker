import { basePage } from "./basePage";

export const loginPage = {
    elements: {
        ...basePage.elements,

        pageTitle: () => cy.get('h1'),

        loginForm: {
            emailInput: () => cy.get('form input[name="email"]'),
            passwordInput: () => cy.get('form input[name="password"]'),
            submitButton: () => cy.get('form button[type="submit"]'),
        },
    },

    actions: {
        ...basePage.actions,

        visit: () => {
            basePage.actions.visit('login');
        },

        checkLoginPageUrl: () => {
            cy.url().should('include', '/login');
        },

        checkLoginPageTitle: () => {
            loginPage.elements.pageTitle().should('have.text', 'Login');
        },

        login: (email, password) => {
            loginPage.elements.loginForm.emailInput().type(email);
            loginPage.elements.loginForm.passwordInput().type(password);
            loginPage.elements.loginForm.submitButton().click();
        },

        goToRegisterPage: () => {
            loginPage.elements.loginForm.registerLink().click();
        },
    },
};
