import { homePage, interactionsPage } from "../../../pages/index";

describe("Checking droppable tab", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it("Should verify user can drag and drop", () => {
    homePage.interactionsCard().click();
    interactionsPage.DroppableBtn().click();
    interactionsPage
      .draggableItem()
      .trigger("mousedown", { which: 1 })
      .trigger("mousemove", { which: 1, pageX: 750, pageY: 400 })
      .trigger("mouseup");
    interactionsPage.droppableArea().should("contain", "Dropped!");
  });
});
