it('Assert Demo', () => {
    cy.visit('https://example.cypress.io')
    cy.contains('get').click()

    //implicit assert
    cy.get('#query-btn')
        .should('contain','Button')
        .and('have.class','query-btn')
        .and('be.enabled')
        .and('be.visible')


    //explicit assert
    expect(true).to.be.true

    //assert
    assert.equal(4,4, 'not equal')
    // assert.strictEqual(4,'4', 'not equal')


  })