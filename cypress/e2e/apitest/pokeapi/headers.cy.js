describe('Automation API with Pokeapi', () => {
    it('Successfully validate  content-type', () => {
        cy.request({
            method: 'GET',
            url: 'https://pokeapi.co/api/v2/pokemon/ditto'
        }).as('pokemon')
        cy.get('@pokemon').its('headers').its('content-type').should('include', 'application/json; charset=utf-8')
        cy.get('@pokemon').its('body').should('include', {name: 'ditto'})
    });

    it('Successfully validate status code', () => {
        cy.request({
            method: 'GET',
            url: 'https://pokeapi.co/api/v2/pokemon/ditto'
        }).as('ditto')
        cy.get('@ditto').its('status').should('equal', 200)
    });

    it('Successfully validate status code with params', () => {
        cy.request({
            method: 'GET',
            url: 'https://reqres.in/api/users?page=2&per_page=1&delay=3'
        }).as('users')
        cy.get('@users').its('status').should('equal', 200)
    });

    it('Successfully validate content', () => {
        cy.request({
            method: 'GET',
            url: 'https://pokeapi.co/api/v2/pokemon/bulbasaur'
        }).as('bulbasaur')
        cy.get('@bulbasaur').its('body').should('include', {name: 'bulbasaur'})
    });

    it('Successfully validate content tugas', () => {
        const requestBody = {
            "name": "limber",
            "url": "https://pokeapi.co/api/v2/ability/7/"
        }
        cy.request({
            method: 'GET',
            url: 'https://pokeapi.co/api/v2/pokemon/ditto',
            body: requestBody
        }).then((response => {
            expect(response.body.abilities[0].ability.name).to.eq(requestBody.name)
        }))
    });
});