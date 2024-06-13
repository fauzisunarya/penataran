Cypress.session.clearAllSavedSessions();

Cypress.Commands.add('Login', (options ={}, username, password) => {
    cy.session([username, password], () => {
        cy.visit(options.baseUrl)
        cy.get('#code').eq(0).type(username).should('have.value', username)
        cy.get('#password').type(password).should('have.value', password)
        cy.get('#loginBtn').eq(0).click()
        if(options.status == 'Positive'){
            cy.wait(1000)
        }else{
        cy.xpath("//div[@role='alert']").should('be.visible').and('contain', 'Username and password mismatch.');
        }
    })
})