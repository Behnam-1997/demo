import { homePage, widgetsPage } from "../../pages/index";

describe("Checking web tables tab", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it("Should verify the progress bar", async () => {
    homePage.widgetsCard().click();
    widgetsPage.progressBarBtn().click();
    widgetsPage.startBtn().click();
    cy.waitUntil(
      () => {
        return widgetsPage.progressBar().then(($el) => $el.text() == "100%");
      },
      {
        timeout: 15000,
        interval: 1000,
      }
    );
    widgetsPage.progressBar().should("have.text", "100%");
    widgetsPage
      .progressBar()
      .should("have.css", "background-color", "rgb(233, 236, 239)");
  });
});
