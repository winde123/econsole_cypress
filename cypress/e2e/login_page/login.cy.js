import LoginPage from '../../page/login_page' ;
const loginpage = new LoginPage()

beforeEach()

describe('This is a straight through login', ()=>{
    it('should be able to access the login page', () => {
        cy.visit('/')
        cy.url().should('match',/login/)
    });

    it('should check for the relevant selectors',() => {
        cy.visit('/')
        loginpage.username_inputfield().type(Cypress.env('username'))

    })



})