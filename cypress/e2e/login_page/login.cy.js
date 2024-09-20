import LoginPage from '../../page/login_page' ;
import HomePage from '../../page/home_page'   ;

const homepage = new HomePage()
const loginpage = new LoginPage()

//beforeEach()

describe('These testcases are for login workflow', ()=>{
    it('should be able to access the login page', () => {
        // tag: test
        cy.visit('/')
        cy.url().should('match',/login/)
    });

    it('should check the relevent selectors', () =>{
        cy.visit('/')
        loginpage.login_logo().should('be.visible')
        loginpage.username_inputfield().should('be.visible')
        loginpage.password_inputfield().should('be.visible')
        loginpage.login_button().should('be.visible')
        loginpage.password_masking_button().should('be.visible')
    });

    it('should be able to login',() => {
        cy.visit('/')
        loginpage.username_inputfield().type(Cypress.env('username'))
        loginpage.password_inputfield().type(Cypress.env('pw'))
        loginpage.login_button().click()
        cy.url().should('match',/main/)

    })

    it('should be able to unmask passwords when you click on the password masking button ',() =>{
        cy.visit('/')
        loginpage.password_inputfield().type(Cypress.env('pw'))
        loginpage.password_masking_button().click()
        loginpage.password_inputfield().should('have.attr','type').and('equal','text')

    });

    it('should not be able to login with null user',() =>{
        cy.visit('/')
        loginpage.password_inputfield().type(Cypress.env('pw'))
        loginpage.login_button().click()
        loginpage.null_warning_text().should('have.text','*Username is required.')
        cy.url().should('match',/login/)
        
    });

    it('should not be able to login with null pw',() =>{
        cy.visit('/')
        loginpage.username_inputfield().type(Cypress.env('username'))
        loginpage.login_button().click()
        loginpage.null_warning_text().should('have.text','*Password is required.')
        cy.url().should('match',/login/)
        
    });

    it('should be able to log out successfully',() =>{
        cy.visit('/')
        loginpage.username_inputfield().type(Cypress.env('username'))
        loginpage.password_inputfield().type(Cypress.env('pw'))
        loginpage.login_button().click()
        homepage.profile_button_header().click()
        homepage.profile_menu_shutdown_button().click()

    });



})