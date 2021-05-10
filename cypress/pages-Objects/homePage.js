export class HomePage{

    navigate(){
        return cy.visit("https://the-internet.herokuapp.com/");

    }
clickLink(link){
   return cy.xpath(link).click()
}

}