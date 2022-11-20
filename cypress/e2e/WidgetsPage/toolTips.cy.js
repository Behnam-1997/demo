import { homePage, widgetsPage } from "../../pages/index";

describe("Checking tool tips tab", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it("Should verify the tooltip", () => {
    homePage.widgetsCard().click();
    widgetsPage.toolTipsBtn().click();
    cy.get(".tooltip-inner").should("not.exist");
    widgetsPage
      .toolTipHoverBtn()
      .trigger("mouseover")
      .then(() => {
        cy.get(".tooltip-inner")
          .should("have.text", "You hovered over the Button")
          .and("be.visible");
      });
  });
});
