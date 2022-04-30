import {LoginPage} from "../../page Object/Login_pages"
import { should } from "chai";
import { Given, And,Then } from "cypress-cucumber-preprocessor/steps";
var data =require('../../fixtures/data.json')

let LogIN = new LoginPage()


  
Given('Navigate to the signIn Page', () => {
  cy.visit(data.Url)
})

And('Enter the email address', () => {

  LogIN.Enter_email_address(data.email)
})


And('Click Continue button',()=>{

   LogIN.Click_Continue_button()
})

And('Enter the password',()=>{
  LogIN.Enter_the_password(data.password)
})

And('Enter the signIn Button',()=>{
  LogIN.Enter_the_signIn_Button()
  
})

Then('My Account Page is Appeared',()=>{
LogIN.My_Account_Page_Appeared()

})

And('Click Shipping Address',()=>{
  
  LogIN.Click_Shipping_Address()
})

And('Click Add an Adress',()=>{
  LogIN.Click_Add_an_Adress()
})

And('Add new address box appeared',()=>{
  
//   cy.get('#fui-modal-Add-New-Address')
//         .should('have.class','css-9orzap')
  LogIN.Add_new_address_box_appeared()
})

And('Enter the full Name', () => {
      LogIN.Enter_the_full_Name(data.full_name)
})

And('Enter the street address', () => {
      LogIN.Enter_the_street_address(data.street_address)
})

And('Enter the city', () => {
  LogIN.Enter_the_city(data.city)    
})

And('Click the sate', () => {
      LogIN.Click_the_sate()
})

And('Select the state', () => {
      LogIN.Select_the_state()
  
})

And('Enter the zipcode', () => {
  LogIN.Enter_the_zipcode(data.zip)
})


And('Enter the Phone Number',()=>{
  LogIN.Enter_the_Phone_Number(data.Phone_Number)
})

And('Save Address Button', () => {
     LogIN.Save_Address_Button()
  
})


And('click Boys Category', () => {
  LogIN.click_Boys_Category()    
  
})

Then('verify the Boys Category URL',()=>{
  LogIN.verify_the_Boys_Category_URL()
})

And('click Toddler Category', () => {  
    LogIN.Click_Toddler_Category()
})

Then('verify the Toddler Category URL',()=>{
 LogIN.verify_the_Toddler_Category_URL()
})
