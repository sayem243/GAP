#### Cypress Setup for Testing
#### Prerequisites

To run the Cypress specs, you’ll need the Cypress app running — yarn modules installed, etc.
#### Node version
Please check the node version used at this project. Please install node if you do not have node already installed
#### Install Cypress
Compatible cypress is mentioned in the pakage.json. Get the latest from master. 
Then, create your desired branch and run yarn install. This should install the Cypress in that branch. 
(For a new project, start with npm init. Then, npm install cypress --save-dev or, yarn add cypress --dev) 
#### How to Run Cypress tests using Test Runner in "Open" mode (i.e. Dev mode)
In a terminal (from project root) run below command
yarn run cypress open
This should set up the cypress and open the tests available. 
You can then pick any test from the list and run the test 
#### Tests location
Our tests are located at cypress/integration. 
Each spec file corresponds to a spec in the Cypress runner.
To make a new test/spec, add a new spec following the *.spec.js convention.

#### Running tests in different environment using config
You can modify the baseURl from the cypress.json file. Or, run the command in following structure
yarn run cypress:run --config baseUrl=https://your-base-url.something.com  

You can use config file other than the cypress.json file in following structure
yarn run cypress:run --config-file dev-config.json 
#### Running tests using different Credentials 
To run tests in credentials other than the one in the cypress.json file, you can simply edit the env variable in the file. Or, you can directly use a value from command line with following structure: 
yarn run cypress:run --env username=someemail@gmail.com,password=Random123  

#### Some other useful commands 
You can combine the baseUrl and user credentials. 
yarn run cypress:run --config baseUrl=https://sales-dev.something.com  --env username=someemail@gmail.com,password=Random123 --headed --browser chrome --spec "cypress/integration/orders/businessName.spec.ts"

In the command above, user is specifying to run a specific test using chrome browser (not headless mode)

To run more than one test, simply name the spec files in comma separated list. 
yarn run cypress:test:test --env username=someemail@updater.com,password=Business1234 --headed --browser chrome --spec "cypress/integration/some-portal/businessPortal.spec.ts","cypress/integration/sales-portal/businessPages.spec.ts"
#### Using xpath as a locators in the test
yarn add cypress-xpath --dev
Then, include the following in your project's cypress/support/index.ts   
require('cypress-xpath') 
[use in the following format: cy.xpath('locator-in-xpath').  ]

#### For more information about Cypress
- [Cypress Documentation](https://docs.cypress.io/guides/overview/why-cypress#In-a-nutshell)
- [Installing Guide ] (https://docs.cypress.io/guides/getting-started/installing-cypress#Installing)