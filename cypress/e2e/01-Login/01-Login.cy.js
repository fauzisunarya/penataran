describe("Login Positive", () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false})
    it("passes", () => {

      cy.visit("http://10.60.176.23/ebis/").wait(2000);

  
      // Input usercode and password
      cy.get('input[type="text"]').type("admin");
      cy.get('input[type="password"]').type("NEURON098");
  
      // Click the login button
      cy.get("#loginBtn").contains("Login").click();
      cy.wait(8000);
  
      
    });
  });
  