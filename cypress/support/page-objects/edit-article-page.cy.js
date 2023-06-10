import BasePage from "./base-page.cy.js";

class EditArticlePage extends BasePage {
  constructor() {
    super();
  }
  typeTitle(title) {
    return this._type(cy.get('[placeholder="Article Title"]'), title);
  }
  typeSubject(subject) {
    return this._type(
      cy.get('[placeholder="What\'s this article about?"]'),
      subject
    );
  }

  typeArticle(article) {
    return this._type(
      cy.get('[placeholder="Write your article (in markdown)"]'),
      article
    );
  }

  typeTags(tags) {
    return this._type(cy.get('[placeholder="Enter tags"]'), tags);
  }
  clickPublishButton() {
    return this._click(cy.get('[type="submit"]'));
  }
}

export default EditArticlePage;
