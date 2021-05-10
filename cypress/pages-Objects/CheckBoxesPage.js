export class CheckBoxesPage{

    enabledFirstCheckBoxButton(){
cy.xpath("//*[@id='checkboxes']/input[1]").click()
    }
       disabledSecondCheckBoxButton() {

cy.xpath("//*[@id='checkboxes']/input[2]").click()
       }

}