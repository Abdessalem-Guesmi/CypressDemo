const { AddRemoeElement } = require('../../pages-Objects/AddRemoveElement');
const { HomePage } = require('../../pages-Objects/homePage');

require('cypress-xpath')
describe('test Add-Remove functionaltity', () => {
            const homePage = new HomePage();
           const addRemoveElement = new AddRemoeElement();
            beforeEach("message", () => {
                homePage.navigate();
               
            })
            

            it('add and remove element Test Case', () => {
                homePage.clickLink("//a[text()='Add/Remove Elements']")
                addRemoveElement.clickAddElement();
                addRemoveElement.deleteButtonisVisible()
                addRemoveElement.clickRemoveElement();               
            })
        })