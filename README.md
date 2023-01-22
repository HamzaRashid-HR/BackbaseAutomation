Automation Execution Steps:
--------------------------
Following are the steps to run end to end Automation suit:

    1. git clone https://github.com/HamzaRashid-HR/BackbaseAutomation.git
    2. cd BackbaseAutomation
    3. npm install 
        → cypress/node_modules & cypress/package-lock.json file will be created
    4. Cypress GUI execution: 
        → npx cypress open
        → select E2E testing
        → select Chrome browser (Start testing)
        → click smokeTests.cy.js
        → screenshots/smokeTests.cy.js folder of failed cases screenshots
    5. Cypress headless execution:
        → npx cypress run
        → cypress/videos/smokeTests/ folder will be created with screen recording of headless execution
    6. Reporting feature:
        → npx cypress run --reporter mochawesome
        → cypress/mochawesome-report folder will be created with HTML & JSON report
    7. Copy the HTML path and run in browser
       
CI/CD Pipeline:
---------------
Jenkins CI/CD pipeline deployed locally and integrated with github repository with following configurations:

    1. Delete 7 days old builds
    2. Added github repository with authentic login
    3. Periodically trigger build every night 00:00 
    4. npx cypress run –reporter mochawesome
    5. email notification (personal account for now) for all builds
    6. Check mocha test resports in pipeline workspace

Test Report:
-----------
Mochawesome automated reporting configuration and results are generated at cypress/mochawesome-report locally & BBlog Automation Pipeline/mochawesome-report/ on Jenkins pipeline.

Deliverables:
------------
Following test artifacts will be included in deliverables:

    1. Cypress test suit
    2. Git repository link
    3. Jenkins access
    4. Test result
    5. Read Me

Tool & Stack versions:
----------------------
Visual Studio Code1.74.3

Chromium: 102.0.5005.167

Electron: 19.1.8

Jenkins 2.375.2

node Version: v18.13.0

npm Version: 8.19.3

cypress Version: 12.3.0

cypress-multi-reporters: 1.6.2

mocha: 10.2.0

mochawesome: 7.1.3
