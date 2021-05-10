export class AuthenicationPage{

    setUsername(username){
     return   cy.xpath("//input[@name='username']").type(username)
    }
    setPassowrd(password){
   return cy.xpath("//input[@name='password']").type(password)
}
    clickLogin(){
    cy.xpath("//button[@type='submit']").click()
}
}