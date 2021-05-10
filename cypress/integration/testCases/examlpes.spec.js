/// <reference type="Cypress">

const { HomePage } = require('../../pages-Objects/homePage');

require('cypress-xpath')
describe('test facebook',()=>{
  const homePage = new HomePage();
   beforeEach("message",()=>{
         homePage.navigate();
   })
     it('Authentication test case',()=>{
         homePage.clickLink("//a[text()='Form Authentication']")
       //cy.xpath("//a[text()='Form Authentication']").click();
       cy.xpath("//input[@name='username']").type("tomsmith")
       cy.xpath("//input[@name='password']").type("SuperSecretPassword!")
       cy.xpath("//button[@type='submit']").click()
       cy.xpath("//div[@id='flash']").should('contain','You logged into a secure area!')
    }); 
    it('logout test case', () => {

          homePage.clickLink("//a[text()='Form Authentication']")
         cy.xpath("//input[@name='username']").type("tomsmith")
         cy.xpath("//input[@name='password']").type("SuperSecretPassword!")
         cy.xpath("//button[@type='submit']").click()
         cy.xpath('//*[@id="content"]/div/a').click()
    })
    it('add and remove element Test Case',()=>{
        cy.xpath("//a[text()='Add/Remove Elements']").click();
        cy.xpath("//button[text()='Add Element']").click();
        cy.get("#elements").should('be.visible')
        cy.get("#elements").click();
        cy.xpath("//button[text()='Delete']").click()
    })
     it('Handling checkboxes', () => {
         cy.xpath("//a[text()='Checkboxes']").click();
         cy.xpath("//*[@id='checkboxes']/input[1]").click()
         cy.xpath("//*[@id='checkboxes']/input[2]").click()
         })
         
     
})