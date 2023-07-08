describe('App', () => {
    it('renders without errors', () => {
      const baseUrl = Cypress.env('NEXT_PUBLIC_BASE_URL');
     console.log(baseUrl)
      cy.visit(baseUrl);

      // Wait for the component to render
    cy.wait(2000);
      // Add assertions or Cypress commands to check if the component renders without errors
      cy.get('[data-cy="app-header"]').should('be.visible');
      cy.get('[data-cy="app-footer"]').should('be.visible');
    });
  });
  