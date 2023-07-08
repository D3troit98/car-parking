import React from 'react'
import AboutDetail from './AboutDetail'

describe('<AboutDetail />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<AboutDetail />)
  })
})