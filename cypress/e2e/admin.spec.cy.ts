describe('Admin Page', () => {
    const baseUrl = Cypress.env('NEXT_PUBLIC_BASE_URL');
  
    beforeEach(() => {
      cy.visit(`${baseUrl}/login`);
      cy.get('[data-cy="email-input"]').type('admin@augustparking.com');
      cy.get('[data-cy="password-input"]').type('qwerty');
      cy.get('[data-cy="login-button"]').click();
      cy.get('[data-cy="logout-button"]').should('be.visible');
    });
  
    it('renders without errors', () => {
      cy.visit(`${baseUrl}/admin`);
      cy.get('h1').contains('Admin Page').should('be.visible');
      cy.wait(3000); // Wait for 2 seconds
      cy.get('[data-cy="users-section"]').should('exist');
      cy.get('[data-cy="settings-section"]').should('exist');
      cy.get('[data-cy="parking-histories"]').should('exist');
      cy.get('[data-cy="parking-spots"]').should('exist');
    });
  
    it('allows the user to logout', () => {
      cy.get('[data-cy="logout-button"]').click();
    });
  });
  