// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('forceCleanup', () => {
    cy.window({ log: false }).then((win) => {
        // Clear all storage
        win.localStorage.clear();
        win.sessionStorage.clear();

        // Clear storage
        cy.clearLocalStorage();
        cy.clearCookies();
    });
});

// Smart logout command
Cypress.Commands.add('logout', () => {
    cy.url().then((url) => {
        if (url.includes('/login') || url.includes('/register') || cy.getCookies().length === 0) {
            cy.log('Already logged out!');
            return;
        }
    });

    // Try to click logout button if it exists
    cy.get('body').then(($body) => {
        if ($body.find('button:contains("Logout")').length > 0) {
            cy.get('button:contains("Logout")').click();
            cy.log('User logged out via Logout button!');
            cy.url().should('include', '/login');
        } else {
            // Clear storage
            cy.clearLocalStorage();
            cy.clearCookies();
            cy.log('User logged out via storage clearing!');
        }
        cy.get('h1').should('contain.text', 'Login');
    });
});
