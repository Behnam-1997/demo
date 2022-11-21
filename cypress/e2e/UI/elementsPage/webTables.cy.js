import { homePage, elementsPage } from "../../../pages/index";

describe("Checking web tables tab", () => {
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
      elementsPage.submitBtn().click();
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
    let exitCritria = false;
    let temp;
    cy.get(".rt-tr-group").each(($row, index) => {
      cy.then(() => {
        if (exitCritria) {
          return false;
        }
        cy.wrap($row).within(() => {
          cy.get(".rt-td")
            .eq(0)
            .then(($value) => {
              if ($value[0].innerText == "Alden") {
                temp = index;
                exitCritria = true;
                cy.wrap($row).within(() => {
                  cy.get("[id^=edit-record]").click();
                });
              }
            });
        });
      });
    });
    cy.fixture("webTableData.json").then((data) => {
      data.firstName = "Gerimedica";
      data.lastName = "BV";
      elementsPage.firstNameInput().clear();
      elementsPage.firstNameInput().type(data.firstName);
      elementsPage.lastNameInput().clear();
      elementsPage.lastNameInput().type(data.lastName);
      elementsPage.submitBtn().click();
      cy.get(".rt-tr-group")
        .eq(temp)
        .within(() => {
          cy.get(".rt-td")
            .eq(0)
            .then(($columns) => {
              expect($columns[0].innerText).to.equal(
                data[Object.keys(data)[0]]
              );
            });
          cy.get(".rt-td")
            .eq(1)
            .then(($columns) => {
              expect($columns[0].innerText).to.equal(
                data[Object.keys(data)[1]]
              );
            });
        });
    });
  });
});
