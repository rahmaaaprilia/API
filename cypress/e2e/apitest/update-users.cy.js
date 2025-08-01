describe('Update User', () => {
    it("Successfully update user", () => {
        const requestBody = {
            "name": "Avril",
            "job": "Student"
        }
        cy.request({
            method: 'PUT',
            url: 'https://reqres.in/api/users/2',
            headers: {'x-api-key': 'reqres-free-v1'},
            body: requestBody}).then((response) => {
            
            expect(response.status).equal(200)
            expect(response.body.name).to.eq(requestBody.name)
            })
    });
});