import { elementsPage } from "../../pages/index";

describe("Elements Page Check", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it("Should verify user can enter new data into the table", () => {
    homePage.elementsCard().click();
    elementsPage.webTableBtn().click();
    let temp;
    cy.get(".rt-tr-group").each(($row, index) => {
      if (!$row[0].innerText.trim() == "") {
        temp = index;
      } else {
        return false;
      }
    });
    elementsPage.addNewRecordBtn().click();
    cy.fixture("webTableData.json").then((data) => {
      elementsPage.firstNameInput().type(data.firstName);
      elementsPage.lastNameInput().type(data.lastName);
      elementsPage.userEmailInput().type(data.email);
      elementsPage.ageInput().type(data.age);
      elementsPage.salaryInput().type(data.salary);
      elementsPage.departmentInput().type(data.department);
    });
    elementsPage.submitBtn().click();
    cy.fixture("webTableData.json").then((data) => {
      cy.get(".rt-tr-group")
        .eq(temp + 1)
        .within(() => {
          cy.get(".rt-td").each(($columns, index) => {
            if (!$columns[0].innerText.trim() == "") {
              expect($columns[0].innerText).to.equal(
                data[Object.keys(data)[index]]
              );
            }
          });
        });
    });
  });
  it("Should verify user can edit the row in a table", () => {
    homePage.elementsCard().click();
    elementsPage.webTableBtn().click();
    cy.get(".rt-tr-group").each(($row, index) => {
      if (!$row[0].innerText.trim() == "Aldren") {
        temp = index;
      } else {
        return false;
      }
    });
  });
});
