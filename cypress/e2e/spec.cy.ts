describe("template spec", () => {
   it("passes", () => {
      cy.visit('/')

      cy.contains('Cypress').should('exist')
   });
});
