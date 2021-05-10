/// <reference type="Cypress">

const { HomePage } = require('../../pages-Objects/homePage');
const { AuthenicationPage } = require('../../pages-Objects/authenticationPage');
//const { contains } = require('cypress/types/jquery');
const { SecureAreaPage } = require('../../pages-Objects/SecureAreaPage');

let data=[]
require('cypress-xpath')
describe('test facebook',()=>{
  const homePage = new HomePage();
  const loginPage = new AuthenicationPage();
  const secureArea = new SecureAreaPage();

   before('before method',()=>{
 
  
     })
   beforeEach( () => {
     
      cy.fixture('logindata').then(function(data) {
        this.data = data
       
      })
        
   });

     it.only('Authentication test case', async function(data){
        
        for(let i=0; i<this.data.length;i++){
           homePage.navigate();
           homePage.clickLink("//a[text()='Form Authentication']")
           cy.log(this.data[i].username)
           cy.log(this.data[i].password)
          loginPage.setUsername(this.data[i].username)
          loginPage.setPassowrd(this.data[i].password)
         
          loginPage.clickLogin();
          const msg = secureArea.getMessage();
         cy.log('---------'+msg)
          
        
        }
      
      
    })


    it('logout test case', () => {

          homePage.clickLink("//a[text()='Form Authentication']")
         cy.xpath("//input[@name='username']").type("tomsmith")
         cy.xpath("//input[@name='password']").type("SuperSecretPassword!")
         cy.xpath("//button[@type='submit']").click()
         cy.xpath('//*[@id="content"]/div/a').click()
    })

         
     
})
