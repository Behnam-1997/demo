import { isThisTypeNode } from "typescript";

export class WebTablesPage {
  constructor() {
    this.addNewRecordBtn = cy.get("#addNewRecordButton");
  }
  addItem(data) {
    this.addNewRecordBtn.click();
    const formItems = this.getFormItems();
    formItems.submitBtn.click();
    formItems.firstNameInput.type(data.firstName);
    formItems.lastNameInput.type(data.lastName);
    formItems.userEmailInput.type(data.email);
    formItems.ageInput.type(data.age);
    formItems.salaryInput.type(data.salary);
    formItems.departmentInput.type(data.department);
  }
  getFormItems() {
    return {
      firstNameInput: cy.get("#firstName"),
      lastNameInput: cy.get("#lastName"),
      userEmailInput: cy.get("#userEmail"),
      ageInput: cy.get("#age"),
      salaryInput: cy.get("#salary"),
      departmentInput: cy.get("#department"),
      submitBtn: cy.get("#submit"),
    };
  }
}
