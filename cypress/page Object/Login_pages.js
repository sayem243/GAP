export class LoginPage{

    Navigate(){

    }

      Enter_email_address(email){
        cy.get('[data-testid="email-input"]').type(email)
    }

    Click_Continue_button(){
        cy.get('.loyalty-email-button').click()
    }

    Enter_the_password(password){
        cy.get('[data-testid="password-input"]').type(password)
    }

    Enter_the_signIn_Button(){
    cy.get('.loyalty-signInForm-button').click()
    // Cypress.config('defaultCommandTimeout', 6000);
    }

    My_Account_Page_Appeared(){
        cy.url().should('include', '/home?login=success')
    }

    Click_Shipping_Address(){
        cy.get(':nth-child(1) > :nth-child(5) > a').click()
    }

    Click_Add_an_Adress(){
        cy.get('.add-address').click()
    }

    Add_new_address_box_appeared(){
        cy.get('#fui-modal-Add-New-Address')
          .should('have.class','css-9orzap')
    }

    Enter_the_full_Name(full_name){
        cy.get('.address-form-fields-container > :nth-child(1) > .css-xcgdxq').type(full_name)

    }
    Enter_the_street_address(street_address){
        cy.get('.address-line-1 > .css-1onrtvx > .css-xcgdxq').type(street_address)  
    }

    Enter_the_city(city){
        cy.get(':nth-child(3) > .css-gjmx8-LabelText-Label').type(city)
    }

     Click_the_sate(){
        cy.get('.css-1brw1wg').click()
     }
     Select_the_state(){
        cy.get('#dropdown-option21').click()
     }
     Enter_the_zipcode(zip){
        cy.get('.zipcode > .css-1onrtvx > .css-xcgdxq').type(zip)
     }
     Enter_the_Phone_Number(phone_number){
        cy.get(':nth-child(5) > .css-xcgdxq').type(phone_number)
     }
     Save_Address_Button(){
        cy.get('.confirm').click()
     }



    //Boys
    click_Boys_Category(){
        cy.get('#topNavWrapper > div > div > ul > li:nth-child(7) > div:nth-child(1) > a').click()
    }

    verify_the_Boys_Category_URL(){
        cy.url().should('include', 'Boys')
    }

    //Toddler 
    Click_Toddler_Category(){
        cy.get('#topNavWrapper > div > div > ul > li:nth-child(8) > div:nth-child(1) > a').click() 
    }

    verify_the_Toddler_Category_URL(){
        cy.url().should('include', 'Toddler')
    }

}