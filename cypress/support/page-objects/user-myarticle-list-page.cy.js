import BasePage from "./base-page.cy.js";

class MyArticleListPage extends BasePage {
  constructor() {
    super();
  }

  selectUserArticle(randomTitle, username) {
    return this._visit(
      "https://vue-vuex-realworld.netlify.app/#/@" + username + "/"
    ).then(() => {
      cy.get(".preview-link h1").each(($el, index, $list) => {
        if ($el.text().includes(randomTitle)) {
          cy.get(".preview-link h1").eq(index).click();
        }
      });
    });
  }

  openMyArticleListPage(username) {
    return this._visit(
      "https://vue-vuex-realworld.netlify.app/#/@" + username + "/"
    );
  }
}

export default MyArticleListPage;
