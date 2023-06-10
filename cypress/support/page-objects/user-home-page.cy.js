import BasePage from "./base-page.cy.js";

class UserHomePage extends BasePage {
  constructor() {
    super();
  }

  homePageLink() {
    return this._visit(this.url);
  }

  clickArticleTitle() {
    return this._click(cy.get("li:nth-of-type(2) > .nav-link"));
  }

  clickUserName() {
    return this._click(cy.get("li:nth-of-type(4) > .nav-link"));
  }

  verifyUserNameIsDisplayed(username) {
    return this._invoke(cy.get("li:nth-of-type(4) > .nav-link"), "text").then(
      (text) => {
        expect(username.trim()).to.include(text.trim());
      }
    );
  }

  getCurrentUrl() {
    return this._current_url();
  }

}

export default UserHomePage;
