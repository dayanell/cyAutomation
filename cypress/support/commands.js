import EditArticlePage from "../support/page-objects/edit-article-page.cy.js";
import ArticlePage from "../support/page-objects/article-page.cy.js";
import SignInPage from "../support/page-objects/signin-page.cy.js";
import UserHomePage from "../support/page-objects/user-home-page.cy.js";

import { faker } from "@faker-js/faker";

// Commnad to create fake data for tests execution
Cypress.Commands.add("generateRandomData", () => {
  const firstName = faker.person.firstName();
  const userName = firstName + "hfs";
  const email = faker.internet.email();
  const password = faker.internet.password();
  const tags = faker.lorem.words(2);
  const title = faker.lorem.words(3);
  const subject = faker.lorem.words(4);
  const content = faker.lorem.sentences(3);

  return {userName, email, password, tags, title, subject, content,
  };
});


// Cypress.Commands.add('login', (email, password) => { ... })
Cypress.Commands.add("loginSuccess", (user) => {
  const signInPage = new SignInPage();
  const userHomePage = new UserHomePage();

  cy.visit(Cypress.env("url") + "/#/login");

  signInPage.typeEmail(user.email);
  signInPage.typePassword(user.password);
  signInPage.clickSignInButton();
});


// Crete article yo use in the edit and delete article tests
Cypress.Commands.add("createArticle", (article) => {
  const editArticlePage = new EditArticlePage();
  const articlePage = new ArticlePage();
  cy.visit(Cypress.env("url") + "/#/editor");
  editArticlePage.typeTitle(article.randomTitle);
  editArticlePage.typeSubject(article.randomSubject);
  editArticlePage.typeArticle(article.randomArticle);
  editArticlePage.typeTags(article.randomTags);
  editArticlePage.clickPublishButton();
  cy.contains("h1", article.randomTitle);
  cy.contains('[class="row article-content"]', article.randomArticle);
  articlePage.articlePublishDateIsCorrect();
});


// Commd to logout of the  application
Cypress.Commands.add("logout", () => {
  cy.visit(Cypress.env("url") + "/#/settings");
  cy.contains("button", "Or click here to logout").click();
});
