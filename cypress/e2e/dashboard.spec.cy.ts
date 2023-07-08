describe('Dashboard Page', () => {
    const baseUrl = Cypress.env('NEXT_PUBLIC_BASE_URL');
    const id = '116440681787649380305'; // Replace with a valid ID for testing
  
    beforeEach(() => {
      cy.visit(`${baseUrl}/userlogin`);
      cy.get('[data-cy="email-input"]').type('michealduruaku88@gmail.com');
      cy.get('[data-cy="password-input"]').type('qwerty');
      cy.get('[data-cy="login-button"]').click();
      cy.wait(2000)
      cy.visit(`${baseUrl}/dashboard/${id}`);
    });
   
    it('renders without errors', () => {  
      cy.get('h1').contains('Welcome').should('be.visible');
      cy.get('[data-cy="dashboard-component"]').should('be.visible');
    });
  
    it('displays reservation status', () => {
      cy.get('[data-cy="reservation-status"]').should('be.visible');
    });
  
    it('displays parking spot information', () => {
      cy.get('[data-cy="parking-spot"]').should('be.visible');
    });
  
    it('displays parking history', () => {
      cy.get('[data-cy="parking-history"]').should('be.visible');
    });
  });
  