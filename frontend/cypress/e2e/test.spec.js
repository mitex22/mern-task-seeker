describe('Auth - Login', () => {
    it('loads login page and shows form', () => {
        cy.visit('/login')
        cy.get('input[name="email"]').should('exist')
        cy.get('input[name="password"]').should('exist')
        cy.get('button[type="submit"]').should('exist')
    })
})