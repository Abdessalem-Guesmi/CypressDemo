/// <reference type="Cypress">

describe('test facebook',()=>{
    /* it('test case1',()=>{
        cy.viewport('iphone-6')
        cy.visit("https://www.google.com");
    }); */
    it('test case2', () => {
        cy.viewport('macbook-15')

        cy.visit("https://www.cypress.io/");
        
        cy.get('a').click();
      //  cy.get(".LC20lb")..click();
    })
})