describe('About Page', () => {
    beforeEach(() => {
        const baseUrl = Cypress.env('NEXT_PUBLIC_BASE_URL');
      cy.visit(`${baseUrl}/about`);
    });
  
    it('renders without errors', () => {
      cy.get('[data-cy="about-detail"]').should('be.visible');
      cy.get('[data-cy="occupancy-rate-chart"]').should('be.visible');
      cy.get('[data-cy="parking-history-timeline"]').should('be.visible');
      cy.get('[data-cy="popular-parking-spots-chart"]').should('be.visible');
    });
  });
  