/// <reference types="cypress" />

context('Navigate', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000/')
    })

    it('can click on savings button',  () => {
        cy.get(':nth-child(2) > a > .btn').click()
        cy.get('[href="/newSaving"] > .btn').click()
        cy.get('[placeholder="Saving for"]').type("A Car")
        cy.get('[placeholder="Saving Goal"]').type(1599)
        cy.get('[placeholder="Currently Saved"]').type(150)
        cy.get('div > :nth-child(4)').click()
    })
})