/// <reference types="cypress"/>
import SignInPage from "../support/page-objects/signin-page.cy.js";
import UserHomePage from "../support/page-objects/user-home-page.cy.js";

Cypress.on("uncaught:exception", (err, runnable) => {return false;});

context("Signin task", () => {
  const signInPage = new SignInPage();
  const userHomePage = new UserHomePage();
  let userData;

  beforeEach(() => {
    cy.intercept('https://api.realworld.io/api/**').as('xhr');
    cy.fixture("user-data.json").then((data) => {userData = data;}); // Load the data from the fixture into spec
    cy.visit(Cypress.env("url") + "/#/login");}); // Open sign in page

  //afterEach(() => {cy.logout();}); // Execute user log out after each test execution

  it("should display the signin form", () => {
    cy.get("form").should("be.visible");
  });

  it("should allow a user to signin with valid credentials", () => {
    signInPage.typeEmail(userData.email);
    signInPage.typePassword(userData.password);
    signInPage.clickSignInButton();
    userHomePage.verifyUserNameIsDisplayed(userData.username);

  });
  it("should allow a user to signin with invalid credentials: incorret password", () => {
    signInPage.typeEmail(userData.email);
    signInPage.typePassword("IncorrectPassword");
    signInPage.clickSignInButton();
    cy.contains("email or password is invalid").should('be.visible')
    cy.stopAllXHR();
    
  });
  it("should allow a user to signin with invalid credentials: email no registered", () => {
    signInPage.typeEmail("hbsdl@hdjksa1254.com.uk");
    signInPage.typePassword(userData.password);
    signInPage.clickSignInButton();
    cy.contains("email or password is invalid").should('be.visible')
    cy.stopAllXHR();
    

  });
});
