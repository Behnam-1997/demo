const elements = {
  webTableBtn: "#item-3",
  addNewRecordBtn: "#addNewRecordButton",
  firstNameInput: "#firstName",
  lastNameInput: "#lastName",
  userEmailInput: "#userEmail",
  ageInput: "#age",
  salaryInput: "#salary",
  departmentInput: "#department",
  submitBtn: "#submit",
};

export const clickOnWebTable = () => {
  cy.getAndClick(elements.webTableBtn).should("have.text", "Web Tables");
};
export const clickAddBtn = () => {
  cy.getAndClick(elements.addNewRecordBtn).should("have.text", "Add");
};
export const clickSubmitBtn = () => {
  cy.getAndClick(elements.submitBtn).should("have.text", "Submit");
};
export const formFiller = () => {
  cy.fixture("webTableData.json").then((data) => {
    cy.getAndType(elements.firstNameInput, data.firstName);
    cy.get(elements.firstNameInput).should("have.value", data.firstName);
    cy.getAndType(elements.lastNameInput, data.lastName);
    cy.get(elements.lastNameInput).should("have.value", data.lastName);
    cy.getAndType(elements.userEmailInput, data.email);
    cy.get(elements.userEmailInput).should("have.value", data.email);
    cy.getAndType(elements.ageInput, data.age);
    cy.get(elements.ageInput).should("have.value", data.age);
    cy.getAndType(elements.salaryInput, data.salary);
    cy.get(elements.salaryInput).should("have.value", data.salary);
    cy.getAndType(elements.departmentInput, data.department);
    cy.get(elements.departmentInput).should("have.value", data.department);
  });
};
