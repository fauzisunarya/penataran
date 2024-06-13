// Cypress.Commands.add("login", (username, password) => {
//     cy.session(
//       username,
//       () => {
//         cy.visit(Cypress.env("baseUrl"));
//         cy.wait(3000);

//         cy.get("#user-name").type(Cypress.env("loginusername"));
//         cy.wait(3000);
//         cy.get("#password").type(Cypress.env("loginPassword"));
//           cy.get("#login-button").click();

//         cy.wait(10000);
//       },
//       {
//         cacheAcrossSpecs: true,
//       },
//     );
//   });
