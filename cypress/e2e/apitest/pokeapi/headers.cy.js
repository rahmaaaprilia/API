describe('Validate Header', () => {
    it('Successfully validate  content-type', () => {
        cy.request({
            method: 'GET',
            url: 'https://pokeapi.co/api/v2/pokemon/ditto'}).as('pokemon')
        cy.get('@pokemon').its('status').should('equal', 200)
        cy.get('@pokemon').its('headers').its('content-type')
        .should('include', 'application/json; charset=utf-8')
    });
});