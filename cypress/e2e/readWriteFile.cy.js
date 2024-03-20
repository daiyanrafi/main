before(() => {
    cy.fixture('example.json').as('test_data')
})

it('read file', function () {
    cy.fixture('example').then((data) => {
        cy.log(data.name)
        cy.log(data.email)
    })

    // Access test_data using alias
    cy.get('@test_data').then((test_data) => {
        cy.log(test_data.name)
    })
})



it('read it again()', ()=>{
    cy.readFile('cypress/fixtures/example.json').then((data)=>{
        cy.log(data.name)
    })
})

//writefile

it('write file', ()=>{
    cy.writeFile('gg.tsx', "gg, this iis ma man bro")
    cy.writeFile('gg-2.txt', "gg, this is ma man bro-2\n")
    cy.writeFile('gg-2.txt', "gg, yo yo hoo!", {flag: 'a+'})
})