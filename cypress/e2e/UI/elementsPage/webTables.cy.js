import {Given, Then, When, Before} from "@badeball/cypress-cucumber-preprocessor";
import {elementsPage, homePage} from "../../../pages";
let temp;

Given('The user visits demoqa.com for enter new data into the table', () => {
    cy.visit("/");
})
When('The user opens elements page for enter new data into the table', () => {
    homePage.elementsCard().click();
})
When('The user opens web table tab', () => {
    elementsPage.elements.webTableBtn().click();
})
When('The user checks how many rows the table have', () => {
    elementsPage.elements.allTableRows().each(($row, index) => {
        if (!$row[0].innerText.trim() == "") {
            temp = index;
        } else {
            return false;
        }
    });
})
When('The user clicks on add button', () => {
    elementsPage.elements.addNewRecordBtn().click();
})
Then('The user fill the requirements', () => {
    cy.fixture("webTableData.json").then((data) => {
        elementsPage.elements.firstNameInput().type(data.firstName);
        elementsPage.elements.lastNameInput().type(data.lastName);
        elementsPage.elements.userEmailInput().type(data.email);
        elementsPage.elements.ageInput().type(data.age);
        elementsPage.elements.salaryInput().type(data.salary);
        elementsPage.elements.departmentInput().type(data.department);
    })
})
When('The user clicks on submit button', () => {
    elementsPage.elements.submitBtn().click()
})
Then('The user checks whether new row is created or not', () => {
    elementsPage.elements.allTableRows()
        .eq(temp + 1)
        .within(() => {
            elementsPage.elements.aTableRow().each(($columns, index) => {
                cy.fixture("webTableData.json").then((data) => {
                    if (!$columns[0].innerText.trim() == "") {
                        expect($columns[0].innerText).to.equal(
                            data[Object.keys(data)[index]]
                        );
                    }
                })
            });
        });
})