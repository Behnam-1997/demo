const url = "/";

const elements = {
  elementsCard: "Elements",
  formsCard: "Forms",
  widgetsCard: "Widgets",
  interactionsCard: "Interactions",
};

export const visit = () => {
  cy.visit(url);
};
export const visitElementsPage = () => {
  cy.containsAndClick(elements.elementsCard);
};
export const visitFormsPage = () => {
  cy.containsAndClick(elements.formsCard);
};
export const visitWidgetsPage = () => {
  cy.containsAndClick(elements.widgetsCard);
};
export const visitInteractionsPage = () => {
  cy.containsAndClick(elements.interactionsCard);
};
