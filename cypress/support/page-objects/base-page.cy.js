class BasePage {
  _visit(url) {
    return cy.visit(url);
  }

  _type(element, text) {
    return element.type(text);
  }

  _click(element) {
    return element.click();
  }

  _invoke(element, methodName, ...args) {
    return element.invoke(methodName, ...args);
  }
  _current_url() {
    return cy.url();
  }

  _clear(element) {
    return element.clear();
  }

  _find(element) {
    return element.find();
  }

  _current_date() {
    const currentDate = new Date();
    return currentDate.toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  }
}

export default BasePage;
