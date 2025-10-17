export const basePage = {
    elements: {
        navBar: {
            // All
            logo: () => cy.contains('a', 'GoalSetter'),
            // Authenticated
            signOutButton: () => cy.get('button').contains('Sign Out'),
            // NOT Authenticated
            loginButton: () => cy.get('a').contains('Login'),
            registerButton: () => cy.get('a').contains('Register'),
        },
        pageTitle: () => cy.get('h1'),
        successMessage: () => cy.get('.Toastify__toast.Toastify__toast-theme--light.Toastify__toast--success'),
        errorMessage: () => cy.get('.Toastify__toast.Toastify__toast-theme--light.Toastify__toast--error'),
    },

    actions: {
        visit: (path) => {
            cy.visit(`${Cypress.config().baseUrl}${path}`);
        },

        clickLogo: () => {
            basePage.elements.navBar.logo().click();
        },

        clickLoginButton: () => {
            basePage.elements.navBar.loginButton().click();
        },

        clickRegisterButton: () => {
            basePage.elements.navBar.registerButton().click();
        },

        clickSignOutButton: () => {
            basePage.elements.navBar.signOutButton().click();
        },

        checkNavbarLinksForUnauthenticated: () => {
            basePage.elements.navBar.logo().should('be.visible');
            basePage.elements.navBar.loginButton().should('be.visible');
            basePage.elements.navBar.registerButton().should('be.visible');
        },

        checkNavbarLinksForAuthenticated: () => {
            basePage.elements.navBar.logo().should('be.visible');
            basePage.elements.navBar.signOutButton().should('be.visible');
        },

        checkPageTitle: (title) => {
            basePage.elements.pageTitle().should('have.text', `${title}`);
        },
    }
}
