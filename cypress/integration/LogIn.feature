Feature: SignIn  and URL verify Functionalities

    Go to Gap 


    Background: Sign In
        Given Navigate to the signIn Page
        And  Enter the email address
        And Click Continue button
        And Enter the password
        And Enter the signIn Button
        Then My Account Page is Appeared

    Scenario: sign In and  create a new shipping address

        And Click Shipping Address
        And Click Add an Adress
        And Add new address box appeared
        And Enter the full Name
        And Enter the street address
        And Enter the city
        And Click the sate
        And Select the state
        And Enter the zipcode
        And Enter the Phone Number
        Then Save Address Button

    # Scenario: Sign In and  Verify the Boys category URL
    #     And click Boys Category
    #     Then verify the Boys Category URL

    # Scenario: Sign In and Verify the Toddler category  URL
    #     And click Toddler Category
    #     Then verify the Toddler Category URL