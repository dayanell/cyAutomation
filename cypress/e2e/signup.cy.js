/// <reference types="cypress"/>
import SignUpPage from "../support/page-objects/signup-page.cy";
import UserHomePage from "../support/page-objects/user-home-page.cy.js";

Cypress.on("uncaught:exception", (err, runnable) => {return false;});

context("Signup", () => {
  const signUpPage = new SignUpPage();
  const userHomePage = new UserHomePage();

  beforeEach(() => {
    cy.visit(Cypress.env("url") + "/#/register");});

  it("should display the signup form", () => {
    cy.get("form").should("be.visible");
  });

  it("should allow a user to signup with valid credentials", () => {
    cy.generateRandomData().then((randomData) => {
      const { userName, email, password } = randomData;
      signUpPage.typeUserName(userName);
      signUpPage.typeEmail(email);
      signUpPage.typePassword(password);
      signUpPage.clickSignUpButton();
      userHomePage.verifyUserNameIsDisplayed(userName);
      cy.visit(Cypress.env("url") + "/#/settings");
      cy.contains("button", "Or click here to logout").click();
    });
  });

  it("should display an error message for invalid credentials - missing username", () => {
    cy.generateRandomData().then((randomData) => {
      const { email, password } = randomData;
      signUpPage.typeEmail(email);
      signUpPage.typePassword(password);
      signUpPage.clickSignUpButton();
      cy.contains("Sign up");
    });
  });

  it("should display an error message for invalid credentials - missing email", () => {
    cy.generateRandomData().then((randomData) => {
      const { userName, password } = randomData;
      signUpPage.typeUserName(userName);
      signUpPage.typePassword(password);
      signUpPage.clickSignUpButton();
      cy.contains("Sign up");
    });
  });

  it("should display an error message for invalid credentials - missing password", () => {
    cy.generateRandomData().then((randomData) => {
      const { userName, email } = randomData;
      signUpPage.typeUserName(userName);
      signUpPage.typeEmail(email);
      signUpPage.clickSignUpButton();
      cy.contains("Sign up");
    });
  });
});
