describe('Tugas Post Users', () => {
    it("Successfully create tugas post user", () => {
    const requestBody = {
        "username": "rahma@gmail.com",
        "password": "rahma123!"
    }

    cy.request({
        method: 'POST',
        url: 'https://reqres.in/api/users/login',
        headers: {'x-api-key': 'reqres-free-v1'},
        body: requestBody}).then((response) => {
       
        expect(response.status).equal(201)
        expect(response.body).to.have.property('username', requestBody.username)
        expect(response.body).to.have.property('password', requestBody.password)
       
         })  
    });
});