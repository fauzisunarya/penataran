describe("Login Positif", () => {
  Cypress.on("uncaught:exception", (err, runnable) => {
    return false;
  });
  it("passes", () => {
    cy.visit(Cypress.env("baseUrl")).wait(2000);

    // Input usercode and password
    cy.get("#user-name").type(Cypress.env("username"));
    cy.get("#password").type(Cypress.env("password"));

    // Click the login button
    cy.get("#login-button").click();
    cy.wait(8000);
  });
});
