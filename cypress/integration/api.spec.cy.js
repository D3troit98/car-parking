describe('August Car Parking APIs', () => {
  const baseUrl = Cypress.env('NEXT_PUBLIC_BASE_URL');
    it('should create a new user', () => {
      cy.request('POST', `${baseUrl}/api/users`, {
        image: 'path/to/image.jpg',
        userName: 'John Doe',
        email: 'johndoe@example.com',
        _id: '123456789',
        _type: 'user',
        loggedIn: 1,
        password: 'password123',
      }).then((response) => {
        expect(response.status).to.equal(200);
      });
    });

  
    it('should retrieve a list of users', () => {
      cy.request('GET',  `${baseUrl}/api/users`).then((response) => {
        expect(response.status).to.equal(200);
        expect(response.body).to.have.property('users').to.be.an('array');
        expect(response.body).to.have.property('totalPages').to.be.a('number');
      });
    });
  
    it('should create a new user', () => {
      const fullName = 'Jane Doe';
      const email = 'janedoe@example.com';
      const password = 'password123';
  
      cy.request('POST', `${baseUrl}/api/signup`, {
        fullName,
        email,
        password,
      }).then((response) => {
        expect(response.status).to.equal(200);
        expect(response.body.user.userName).to.equal(fullName);
        expect(response.body.user.email).to.equal(email);
        // Add more assertions as needed
      });
    });

    it('should return an error if user already exists', () => {
      // Add logic to create an existing user first (if needed)
  
      const fullName = 'John Doe';
      const email = 'johndoe@example.com';
      const password = 'password123';
  
      cy.request('POST', `${baseUrl}/api/signup`, {
        fullName,
        email,
        password,
      }).then((response) => {
        expect(response.status).to.equal(200);
        expect(response.body.message).to.equal('User already exists');
      });
    });
  
    it('should return an error if invalid request method is used', () => {
      cy.request({
        method: 'PUT',
        url: `${baseUrl}/api/signup`,
        failOnStatusCode: false,
      }).then((response) => {
        expect(response.status).to.equal(405);
      });
    });

    it('should return popular parking spots', () => {
      cy.request('GET', `${baseUrl}/api/popular-parking-spots`).then((response) => {
        expect(response.status).to.equal(200);
        expect(response.body.parkingSpots).to.be.an('array');
        expect(response.body.counts).to.be.an('array');
        // Add more assertions as needed
      });
    });

    it('should create a new parking spot', () => {
      const parkingSpotData = {
        _id:'12345',
        name: 'Parking Spot A',
        location: 'Location A',
        price: '10.99',
        image: 'https://example.com/image.jpg',
      };
  
      cy.request('POST', `${baseUrl}/api/parking-spots`, parkingSpotData).then((response) => {
        expect(response.status).to.equal(201);
        expect(response.body.message).to.equal('Succesfully updated parkingSpot');
        // Add more assertions as needed
      });
    });

    it('should get a list of available parking spots', () => {
      cy.request('GET', `${baseUrl}/api/parking-spots`).then((response) => {
        expect(response.status).to.equal(200);
        expect(response.body.parkingSpots).to.be.an('array');
        // Add more assertions as needed
      });
    });



    it('should get parking history chart data', () => {
      cy.request('GET', `${baseUrl}/api/parking-history-chart`).then((response) => {
        expect(response.status).to.equal(200);
        expect(response.body).to.have.property('checkInDates');
        expect(response.body).to.have.property('checkInTimes');
        expect(response.body.checkInDates).to.be.an('array');
        expect(response.body.checkInTimes).to.be.an('array');
        // Add more assertions as needed
      });
    });

    it('should get parking histories', () => {
      cy.request('GET', `${baseUrl}/api/parking-histories`).then((response) => {
        expect(response.status).to.equal(200);
        expect(response.body).to.have.property('parkingHistories');
        expect(response.body.parkingHistories).to.be.an('array');
        // Add more assertions as needed
      });
    });

    it('should get occupancy data', () => {
      cy.request('GET', `${baseUrl}/api/occupancy`).then((response) => {
        expect(response.status).to.equal(200);
        expect(response.body).to.have.property('occupancyData');
        expect(response.body).to.have.property('labels');
        expect(response.body.occupancyData).to.be.an('array');
        expect(response.body.labels).to.be.an('array');
        // Add more assertions as needed
      });
    });

    it("should return an available parking spot", () => {
      cy.request("GET",  `${baseUrl}/api/available-parkingspot`)
        .its("status")
        .should("equal", 200)
        .then((response) => {
          expect(response.parkingSpot).to.not.be.null;
          expect(response.parkingSpot.available).to.be.true;
        });
    });
  
  
   
    it("should return paginated parking spots", () => {
      cy.request("GET",  `${baseUrl}/api/all-parking-spots`)
        .its("status")
        .should("equal", 200)
    });
  
    it("should return the correct number of parking spots per page", () => {
      cy.request("GET",  `${baseUrl}/api/all-parking-spots?page=1&limit=3`)
        .its("status")
        .should("equal", 200)
    });
  
    it("should handle pagination correctly", () => {
      cy.request("GET",  `${baseUrl}/api/all-parking-spots?page=2&limit=3`)
        .its("status")
        .should("equal", 200)
    });
  });
  