# BackbaseAutomation
How to execute BBLog Automation Suit

1. git clone 

2. cd BBlogAutomationSuit

3. npm install
    -> cypress/node_modules & cypress/package-lock.json file will be created

4. Cypress GUI execution : npx cypress open 
    -> select E2E testing -> select Chrome browser (Start testing) -> click smokeTest.cy.js
    -> screenshots/smokeTests.cy.js folder of failed cases screenshots

5. Headless execution : npx cypress run
    -> cypress/videos folder with screen recording of headless execution

6. Reporting Feature : npx cypress run --reporter mochawesome
    -> cypress/mochawesome-report folder will be created with HTML & JSON report

7. Copy the HTML path and run in browser
