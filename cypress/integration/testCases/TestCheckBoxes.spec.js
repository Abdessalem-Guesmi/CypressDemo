const { CheckBoxesPage } = require('../../pages-Objects/CheckBoxesPage');
const { HomePage } = require('../../pages-Objects/homePage');

require('cypress-xpath')
describe('test checkBoxes functionaltity', () => {
            const homePage = new HomePage();
            const checkBoxesPage = new CheckBoxesPage();
            beforeEach("message", () => {
                homePage.navigate();
            })

it('logout test case', () => {
    homePage.clickLink("//a[text()='Checkboxes']");
    checkBoxesPage.enabledFirstCheckBoxButton();
    checkBoxesPage.disabledSecondCheckBoxButton();
})

})