describe('Booking Page', () => {
    const baseUrl = Cypress.env('NEXT_PUBLIC_BASE_URL');
  
    beforeEach(() => {
        cy.visit(`${baseUrl}/userlogin`);
        cy.get('[data-cy="email-input"]').type('michealduruaku88@gmail.com');
        cy.get('[data-cy="password-input"]').type('qwerty');
        cy.get('[data-cy="login-button"]').click();
        cy.wait(2000)
      // Visit the booking page
      cy.visit(`${baseUrl}/booking`);
      cy.wait(2000)
    });
  
    it('renders the booking form correctly', () => {
      // Check if the page title is correct
      cy.title().should('eq', 'August Car Parking App - Book Now');
  
      // Check if the select parking spot label is visible
      cy.get('label').contains('Select Parking Spot:').should('be.visible');
  
      // Check if the check-in date label is visible
      cy.get('label').contains('Check-in Date:').should('be.visible');
  
      // Check if the check-in time label is visible
      cy.get('label').contains('Check-in Time:').should('be.visible');
  
      // Check if the license plate label is visible
      cy.get('label').contains('License Plate:').should('be.visible');
  
      // Check if the book button is visible
      cy.get('button').contains('Book').should('be.visible');
    });
  
    it('allows booking a parking spot', () => {
      // Select a parking spot from the dropdown
      cy.get('select').select('Eaton Parking'); // Replace with the actual parking spot name to be selected
  
      // Enter the check-in date
      cy.get('input#checkInDate').type('2023-07-05'); // Replace with the desired check-in date
  
      // Enter the check-in time
      cy.get('input#checkInTime').type('10:00'); // Replace with the desired check-in time
  
      // Enter the license plate
      cy.get('input#licensePlate').type('ABC123'); // Replace with the desired license plate
  
      // Add assertions or Cypress commands to check the booking process and redirection to the success page
      // ...
    });
  });
  