/// <reference types="cypress"/>
import SignInPage from "../support/page-objects/signin-page.cy.js";
import UserHomePage from "../support/page-objects/user-home-page.cy.js";
import EditArticlePage from "../support/page-objects/edit-article-page.cy.js";
import ArticlePage from "../support/page-objects/article-page.cy.js";

Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});

context("Create Article", () => {
  const signInPage = new SignInPage();
  const userHomePage = new UserHomePage();
  const editArticlePage = new EditArticlePage();
  const articlePage = new ArticlePage();
  let userData;

  beforeEach(() => {
    cy.intercept('https://api.realworld.io/api/**').as('xhr');
  
    
    cy.fixture("user-data.json").then((data) => {userData = data; // Load the data from the fixture into spec
    cy.loginSuccess({ email: userData.email, password: userData.password, name: userData.username,}); // Execute Login
    userHomePage.verifyUserNameIsDisplayed(userData.username);  // Verify if the user signed in is the correct user
    cy.visit(Cypress.env("url") + "/#/editor");
    });
  });


  it("should add a new article into a website", () => {
    cy.generateRandomData().then((randomData) => {
      const { tags, title, subject, content } = randomData;

      editArticlePage.typeTitle(title);
      editArticlePage.typeSubject(subject);
      editArticlePage.typeArticle(content);
      editArticlePage.typeTags(tags);
      editArticlePage.clickPublishButton();
      cy.contains("h1", title);
      cy.contains('[class="row article-content"]', content);
      articlePage.articlePublishDateIsCorrect();
      
    });
    cy.stopAllXHR();
  });

  it("should not add a new article into a website: Title can't be blank", () => {
    cy.generateRandomData().then((randomData) => {
      const { tags, title, subject, content } = randomData;

      editArticlePage.typeSubject(subject);
      editArticlePage.typeArticle(content);
      editArticlePage.typeTags(tags);
      editArticlePage.clickPublishButton();
      cy.contains("can't be blank").should('be.visible')
      cy.contains("title").should('be.visible')
               
    });
    cy.stopAllXHR();
  });
  
  
});
