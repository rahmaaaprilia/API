describe('Get User List', () => {
    it('Verify the list users will displayed', () => {
        cy.request({
            method: 'GET',
            url: 'https://reqres.in/api/users?pages=2&per-pages=1&delay=3'
        }).as('users')
        cy.get('@users').its('status').should('equal', 200)
    });
});