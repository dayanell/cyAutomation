import BasePage from "./base-page.cy.js";

export class SignUpPage extends BasePage {
  constructor() {
    super();
  }
  typeUserName(username) {
    return this._type(cy.get("input[placeholder='Username']"), username);
  }

  typeEmail(email) {
    return this._type(cy.get("input[placeholder='Email']"), email);
  }

  typePassword(password) {
    return this._type(cy.get("input[placeholder='Password']"), password);
  }

  clickSignUpButton() {
    return this._click(cy.get(".btn.btn-lg.btn-primary.pull-xs-right"));
  }
  getCurrentUrl() {
    return this._current_url();
  }

  clickSignUpButton() {
    return this._click(cy.get(".btn.btn-lg.btn-primary.pull-xs-right"));
  }
}

export default SignUpPage;
