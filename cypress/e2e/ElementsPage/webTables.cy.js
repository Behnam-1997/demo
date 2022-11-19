import { elementsPage } from "../../pages/index";

describe("Elements page check", () => {
  beforeEach(() => {
    cy.visit("/webtables");
  });
  it("should enter data in table", async () => {
    const data = await cy.fixture("webTableData.json");
    const webTablesPage = new elementsPage.WebTablesPage();
    webTablesPage.addItem(data);
    let temp = null;
    cy.get(".rt-tr-group").each(($el) => {
      cy.wrap($el).within(() => {
        cy.get(".rt-td")
          .its("0.innerText")
          .then((text) => {
            if (text.trim() == "") {
              console.log(temp);
              return;
            }
            temp = $el;
          });
      });
    });
  });
});
