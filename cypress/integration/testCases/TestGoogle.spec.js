const { AddRemoeElement } = require('../../pages-Objects/AddRemoveElement');
const { HomePage } = require('../../pages-Objects/homePage');

require('cypress-xpath')
describe('test Add-Remove functionaltity', () => {
            const homePage = new HomePage();
           const addRemoveElement = new AddRemoeElement();
            beforeEach("message", () => {
                cy.visit('https://www.google.com/')
                cy.fixture('logindata').then(function(data) {
                    this.data=data
                    cy.log(this.data.password)
                })
               
            })
            

            it('add and remove element Test Case', function(data) {  
                 cy.log(this.data.password)
               cy.xpath("//input[@name='q']").type(this.data.password + '{enter}')
            })
        })