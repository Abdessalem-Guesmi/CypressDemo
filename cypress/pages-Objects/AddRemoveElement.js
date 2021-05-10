export class AddRemoeElement{

    clickAddElement(){
        cy.xpath("//button[text()='Add Element']").click();
    }
    clickRemoveElement(){
        cy.xpath("//button[text()='Delete']").click()
    }
    deleteButtonisVisible(){
        cy.get("#elements").should('be.visible')
    }
}