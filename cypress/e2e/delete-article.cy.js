/// <reference types="cypress"/>
import UserHomePage from "../support/page-objects/user-home-page.cy.js";
import MyArticleListPage from "../support/page-objects/user-myarticle-list-page.cy.js";
import ArticlePage from "../support/page-objects/article-page.cy.js";

Cypress.on("uncaught:exception", (err, runnable) => {return false;});

context("Delete article", () => {
  const myArticleListPage = new MyArticleListPage();
  const userHomePage = new UserHomePage();
  const articlePage = new ArticlePage();
  let userData;
  let title;

  beforeEach(() => {
      cy.fixture("user-data.json").then((data) => {userData = data; // Load the data from the fixture into spec
      cy.loginSuccess({email: userData.email,password: userData.password,name: userData.username }); // Execute Login
      userHomePage.verifyUserNameIsDisplayed(userData.username); // Verify if the user signed in is the correct user
      cy.generateRandomData().then((randomData) => {
        const { tags, title: generatedTitle, subject, content } = randomData; title = generatedTitle; // Assign the value to the title variable
      cy.createArticle({randomTags: tags,randomTitle: title,randomSubject: subject,randomArticle: content, // Create article 
        });
      });
    });
  });
    

  it("should remove the article from the user article list", () => {
      myArticleListPage.selectUserArticle(title, userData.username);
      articlePage.clickDeleteButton();
      myArticleListPage.openMyArticleListPage();
      cy.contains(title).should("not.exist");
    });
  });

