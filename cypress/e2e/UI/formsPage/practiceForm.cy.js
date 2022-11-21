import { homePage, formsPage } from "../../pages/index";

describe("Checking practice form tab", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it("Should verify user can submit the form", () => {
    homePage.formsCard().click();
    formsPage.practiceFormBtn().click();
    cy.fixture("practiceFormData.json").then((data) => {
      formsPage.firstNameInput().type(data.firstName);
      formsPage.lastNameInput().type(data.lastName);
      formsPage.userEmailInput().type(data.email);
      formsPage.maleGenderRadio().check({ force: true });
      formsPage.userNumberInput().type(data.mobile);
      formsPage.dateOfBirthInputInput().click();
      cy.get(".react-datepicker__month-select").select(data.monthOfBirth);
      cy.get(".react-datepicker__year-select").select(data.yearOfBirth);
      cy.get(".react-datepicker__month").contains(data.dayOfBirth).click();
      formsPage.subjectsInput().type(data.subjects);
      formsPage.readingCheckbox().click({ force: true });
      formsPage.uploadPictureBtn().attachFile("gerimedica-logo.png");
      formsPage.currentAddressInput().type(data.currentAddress);
      formsPage.stateSelectBox().click();
      cy.contains(data.state).click();
      formsPage.citySelectBox().click();
      cy.contains(data.city).click();
      formsPage.subjectsInput().type("{enter}");
      cy.get("tbody").within(() => {
        cy.get("tr")
          .eq(0)
          .should("contain", `${data.firstName} ${data.lastName}`);
        cy.get("tr").eq(1).should("contain", data.email);
        cy.get("tr").eq(2).should("contain", data.gender);
        cy.get("tr").eq(3).should("contain", data.mobile);
        cy.get("tr").eq(4).should("contain", data.dateOfBirth);
        cy.get("tr").eq(5).should("not.contain", data.subjects);
        cy.get("tr").eq(6).should("contain", data.hobbies);
        cy.get("tr").eq(7).should("contain", data.image);
        cy.get("tr").eq(8).should("contain", data.currentAddress);
        cy.get("tr").eq(9).should("contain", `${data.state} ${data.city}`);
      });
    });
    formsPage.closeModalBtn().click();
  });
});
