describe('Delete User', () => {
    it("Successfully deleted user", () => {
        cy.request({
            method: 'DELETE',
            url: 'https://reqres.in/api/users/2',
            headers: {'x-api-key': 'reqres-free-v1'}}).then((response) => {
            
            expect(response.status).equal(204)
            })
    });
});