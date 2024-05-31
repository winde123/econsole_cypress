class home_page {
    //tabs
    gatesOverview_tab(){
        return cy.xpath("//div[@class='dashboard-tab-header-container ng-tns-c72-2']/div[1]")
    }
    statistics_tab(){
        return cy.xpath("//div[@class='dashboard-tab-header-container ng-tns-c72-2']/div[2]")

    }
    siteConfigurations_tab(){
        return cy.xpath("//div[@class='dashboard-tab-header-container ng-tns-c72-2']/div[3]")

    }
    gatesSettings_tab(){
        return cy.xpath("//div[@class='dashboard-tab-header-container ng-tns-c72-2']/div[4]")
    }
    TMD_tab(){
        return cy.xpath("//div[@class='dashboard-tab-header-container ng-tns-c72-2']/div[5]")
    }
    
    //header buttons
    lockDown_button(){
        return cy.xpath("//button[@class='mat-ripple header-emergency-button-red']")
    }
    openAllGates_button(){
        return cy.xpath("//button[@class='mat-ripple header-emergency-button-red-secondary']")
    }
    volume_button_header(){
        return cy.xpath("//button[@class='mat-ripple header-icon-button-icon-container ng-star-inserted']")
    }
    profile_button_header(){
        return cy.xpath("//button[@class='mat-ripple mat-mdc-menu-trigger header-icon-button-icon-container']")
    }
    profile_menu_list(){
        return cy.xpath("//div[@class='mat-mdc-menu-content mdc-list ng-tns-c20-3']")
    }

    notification_button_header(){
        return cy.xpath("//button[@class='mat-badge mat-ripple flex mr-4 items-center mat-badge-warn mat-badge-overlap mat-badge-above mat-badge-after mat-badge-medium mat-badge-hidden']")
    }
    notification_menu(){
        return cy.xpath("//app-notification")
    }
   
}
export default home_page 