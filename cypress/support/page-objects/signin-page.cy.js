import BasePage from "./base-page.cy.js";

class SignInPage extends BasePage {
  constructor() {
    super();
  }
  typeEmail(email) {
    return this._type(cy.get("input[placeholder='Email']"), email);
  }

  typePassword(password) {
    return this._type(cy.get("input[placeholder='Password']"), password);
  }

  clickSignInButton() {
    return this._click(cy.get(".btn.btn-lg.btn-primary.pull-xs-right"));
  }
  getCurrentUrl() {
    return this._current_url();
  }
}

export default SignInPage;
