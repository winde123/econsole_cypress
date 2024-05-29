
class login_page {
    username_inputfield(){
        return cy.xpath('//input[@placeholder="Username"]')
    }
    password_inputfield(){
        return cy.xpath('//input[@placeholder="Password"]')
    }
    login_button(){
        return cy.xpath('//button[@class="mat-ripple login-button"]')
    }
}

export default login_page