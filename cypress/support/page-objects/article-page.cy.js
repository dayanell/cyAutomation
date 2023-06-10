import BasePage from "./base-page.cy.js";

class ArticlePage extends BasePage {
  constructor() {
    super();
  }
  articlePublishDateIsCorrect() {
    const formattedDate = this._current_date();
    cy.get(".banner span.date").invoke("text").should("contain", formattedDate);
  }

  clickDeleteButton() {
    cy.get(".banner .btn-outline-danger span")
      .invoke("text")
      .should("contain", "Delete Article");
    this._click(cy.get(".banner .btn-outline-danger span"));
  }

  clickEditArticleButton() {
    cy.get(".banner .btn-outline-secondary span")
      .invoke("text")
      .should("contain", "Edit Article");
    this._click(cy.get(".banner .btn-outline-secondary span"));
  }
}

export default ArticlePage;
