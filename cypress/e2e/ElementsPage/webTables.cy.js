import { homePage, elementsPage } from "../../pages/index";

describe("Elements page check", () => {
  beforeEach(homePage.visit);
  it("should enter data in table", async () => {
    const webTableData = await cy.fixture("webTableData.json");
    homePage.visitElementsPage();
    elementsPage.clickOnWebTable();
    elementsPage.clickAddBtn();
    elementsPage.formFiller(webTableData);
    elementsPage.clickSubmitBtn();
  });
});
