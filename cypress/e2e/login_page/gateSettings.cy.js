
import gateSettings_page from "../page/gateSettings_page";
const gatesettings_page= new gateSettings_page()

let length
beforeEach(()=> {
    cy.visit('/')
})
describe('This asserts elements in side menus',() =>{
    it('should be able to assert Gate Selection side menu',()=>{
        cy.visit('/')
        cy.get(gatesettings_page.gatesSelection_tab).should("have.text","Gates Selection")    
    })
    it('should be able to assert Mode Settings side menu',()=>{
        cy.visit('/')
        cy.get(gatesettings_page.modeSelection_tab).should("have.text","Mode Settings")
        
    })
    
   

});