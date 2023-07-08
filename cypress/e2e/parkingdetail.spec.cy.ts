describe('Parking Detail Page', () => {
  const baseUrl = Cypress.env('NEXT_PUBLIC_BASE_URL');
  const parkingId = '64701cd34d82139b321ca9de'; // Replace with the actual parking ID to be tested

  beforeEach(() => {
    // Visit the parking detail page
    cy.visit(`${baseUrl}/userlogin`);
    cy.get('[data-cy="email-input"]').type('michealduruaku88@gmail.com');
    cy.get('[data-cy="password-input"]').type('qwerty');
    cy.get('[data-cy="login-button"]').click();
    cy.wait(5000)
    cy.visit(`${baseUrl}/parking-detail/${parkingId}`);
   
  });

  it('renders the parking details correctly', () => {
    // Check if the page title is correct
    cy.wait(5000)
    cy.title().should('eq', 'August Car Parking App - Parking Detail');

    // Check if the parking spot name is visible
    cy.get('h3').should('be.visible');

    // Check if the location is visible
    cy.get('p').should('be.visible');

    // Check if the price is visible
    cy.get('p').contains('Price:').should('be.visible');

    // Check if the availability is visible
    cy.get('p').contains('Availability').should('be.visible');

   
  });

});
