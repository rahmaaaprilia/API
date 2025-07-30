describe('Create New User', () => {
    it("Successfully create new user", () => {
    const requestBody = {
        "name": "Rahma",
        "job": "QA"
    }

    cy.request({
        method: 'POST',
        url: 'https://reqres.in/api/users',
        headers: {'x-api-key': 'reqres-free-v1'},
        body: requestBody}).then((response) => {
       
        expect(response.status).equal(201)
        expect(response.body).to.have.property('name', requestBody.name)
        expect(response.body).to.have.property('job', requestBody.job)
         })  
    });
});