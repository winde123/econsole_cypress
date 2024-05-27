
class login_page {
    username_inputfield(){
        return cy.xpath('//input[@placeholder="Username"]')
    }
}

export default login_page