export class SecureAreaPage {

    getMessage() {
       cy.get("#flash").then(function ($elem) {
           $elem.text()
       })
    }
    
}