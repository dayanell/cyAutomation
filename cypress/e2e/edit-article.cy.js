/// <reference types="cypress"/>
import UserHomePage from "../support/page-objects/user-home-page.cy.js";
import EditArticlePage from "../support/page-objects/edit-article-page.cy.js";
import ArticlePage from "../support/page-objects/article-page.cy.js";

Cypress.on("uncaught:exception", (err, runnable) => {return false;});

context("Edit article", () => {
  const userHomePage = new UserHomePage();
  const editArticlePage = new EditArticlePage();
  const articlePage = new ArticlePage();
  let userData;

  beforeEach(() => {
  
    cy.fixture("user-data.json").then((data) => {userData = data;   // Load the data from the fixture into spec
    cy.loginSuccess({ email: userData.email, password: userData.password, name: userData.username,}); // Execute Login
    userHomePage.verifyUserNameIsDisplayed(userData.username); // Verify if the user signed in is the correct user
    cy.generateRandomData().then((randomData) => { const { tags, title, subject, content } = randomData; // Create article 
    cy.createArticle({randomTags: tags, randomTitle: title, randomSubject: subject, randomArticle: content, });
      });
    });
  });

  afterEach(() => {cy.logout();}); // Execute user log out after each test execution

  it("should update the article ", () => {
    cy.generateRandomData().then((randomData) => {const { tags, title, subject, content } = randomData;

      articlePage.clickEditArticleButton();
      editArticlePage.typeTitle(title);
      editArticlePage.typeSubject(subject);
      editArticlePage.typeArticle(content);
      editArticlePage.typeTags(tags);
      editArticlePage.clickPublishButton();
      cy.contains("h1", title);
      cy.contains('[class="row article-content"]', content);
      articlePage.articlePublishDateIsCorrect();

    });
  });
});
