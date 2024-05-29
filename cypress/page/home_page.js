class gatesOverview_page {
    //tabs
    gatesOverview_tab(){
        return cy.xpath("//app-main/div[1]/div[1]/div[1]/div[contains(.,'Gates Overview')]")
    }
    statistics_tab(){
        return cy.xpath("//app-main/div[1]/div[1]/div[1]/div[contains(.,'Statistics')]")

    }
    siteConfigurations_tab(){
        return cy.xpath("//app-main/div[1]/div[1]/div[1]/div[contains(.,'Site Configurations')]")

    }
    gatesSettings_tab(){
        return cy.xpath("//app-main/div[1]/div[1]/div[1]/div[contains(.,'Gates Settings')]")
    }
    TMD_tab(){
        return cy.xpath("//app-main/div[1]/div[1]/div[1]/div[contains(.,'TMD')]")
    }
    
    //header buttons
    lockDown_button(){
        return cy.xpath("//app-header/header/div[1]/div[2]/div[1]/button")
    }
    openAllGates_button(){
        return cy.xpath("//app-header/header/div[1]/div[2]/div[2]/button")
    }
    volume_button_header(){
        return cy.xpath("//header/div/div[3]/div[2]/div[1]/button")
    }
    profile_button_header(){
        return cy.xpath("//header/div/div[3]/div[2]/div[2]/button")
    }
    profile_menu_list(){
        return cy.xpath("//body/div[3]/div[2]/div/div/div")
    }

    notification_button_header(){
        return cy.xpath("//header/div/div[3]/div[2]/div[3]/button")
    }
    notification_menu(){
        return cy.xpath("//app-notification")
    }
    
   
}