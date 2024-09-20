class gateSettings_page {

    gatesSelection_tab(){
        return cy.xpath('//div[@class="overview-gates-settings-menu"]/div[1]')
    }
    modeSelection_tab(){
        return cy.xpath('//div[@class="overview-gates-settings-menu"]/div[2]')
    }
    searchByName_textField(){
        return cy.xpath('//input[@placeholder="Search by Name"]')
    }

    //buttons in gate selection tab
    ClearAll_button(){
        return cy.xpath('//div[@class="overview-gates-settings-selection-buttons"]/button[contains(.,"Clear All")]')
    }
    All_button(){
        return cy.xpath('//div[@class="overview-gates-settings-selection-buttons"]/button[1]')
    }
    Next_button(){
        return cy.xpath('//div[@class="overview-gates-settings-selection-footer"]/div/button')
    }
    
    //buttons in mode selection tab
    Clear_button(){
        return cy.xpath('//div[@class="overview-gates-settings-action-footer"]/div/div/button[contains(.,"Clear")]')
    }
    Save_button(){
        return cy.xpath('//div[@class="overview-gates-settings-action-footer"]/div/div/button[contains(.,"Save")]')
    }
    display_gates(){
        return cy.xpath('//div[@class="overview-gates-settings-selection-main-content-grid"]')
    }

}
export default gateSettings_page