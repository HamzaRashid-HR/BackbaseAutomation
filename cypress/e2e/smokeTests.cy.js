Cypress.config('experimentalSessionSupport', true)
Cypress.session.clearAllSavedSessions() 
const profileName = 'cypresstest'

// Current Date & Time calculation
const dayjs = require('dayjs')
const dateTime = dayjs().format('MM-DD-YYYY_H:mm:ss')

// Login session before each testcase
beforeEach(() => {
  const uName = 'candidatex'
  const pwd = 'qa-is-cool'
  cy.LoginWithPageSession(uName, pwd)
})

describe('BBlog Suit', () => {

    // To verify new article when ‘create a new article with complete information of title, about, description & tags 
    it('Create Article', () => {
        cy.get('a[href*="/editor"]').click()
        cy.get("input[placeholder ='Article Title']").type('Cypress Article Title ' + dateTime)
        cy.get('input[placeholder="What\'s this article about?"]').type("Cypress Article Bio")
        cy.get('textarea[placeholder="Write your article (in markdown)"]').type("Cypress Article Description")
        cy.get("input[placeholder='Enter tags']").type('#hamzatags')
        cy.contains('Publish Article').click()
        cy.contains('Edit Article').should('be.visible')
    })

    // To verify the modifications when ‘update the article information of about & description’  
    it('Update Article', () => {
      cy.get('a[href*="/profile/' + profileName + '"]').click()
      cy.get('h1').contains('Cypress Article Title ' + dateTime).click()
      cy.get('a[href^="/editor/"]').first().click();
      cy.get("input[placeholder ='Article Title']").clear().type('Cypress Article Title Updated ' + dateTime)
      cy.get('input[placeholder="What\'s this article about?"]').clear().type("Cypress Article Bio Updated")
      cy.get('textarea[placeholder="Write your article (in markdown)"]').clear().type("Cypress Article Description Updated")
      cy.contains('Publish Article').click()
      cy.contains('Edit Article').should('be.visible')
     })

    // To verify comment is added when ‘New comment is posted’
     it('Add comment', () => {
      cy.get('a[href*="/profile/' + profileName + '"]').click()
      cy.get('h1').contains('Cypress Article Title Updated ' + dateTime).click()
      cy.get('textarea[placeholder="Write a comment..."]').type("Cypress Article Comment")
      cy.contains('Post Comment').click()
     })

    //To verify favourite count when ‘heart icon is clicked’
     it('Favourite Count', () => {
      cy.get('a[href*="/profile/' + profileName + '"]').click()
      cy.get('button[class*="btn btn-sm btn-outline-primary"]').first().click();
      cy.get('button[class*="btn btn-sm btn-primary"]').first().contains('1'); 
     })

    // To verify removal of article when ‘Delete the article’  
     it('Delete Article', () => {
      cy.get('a[href*="/profile/' + profileName + '"]').click()
      cy.get('h1').contains('Cypress Article Title Updated ' + dateTime).click()
      cy.get('button[class*="btn btn-sm btn-outline-danger"]').first().click();
      cy.get('a[href*="/profile/' + profileName + '"]').should('be.visible')
     })
})