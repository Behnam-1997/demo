import { homePage, elementsPage } from "../../pages/index";

describe("Elements Page Check", () => {
  before(homePage.visit);
  describe("Verify user can enter new data into the table", () => {
    it("Visits Elements Page", homePage.visitElementsPage);
    it("Click on Web Tables", elementsPage.clickOnWebTable);
    it("Click on Add button", elementsPage.clickAddBtn);
    it("Fill The Input Fields", elementsPage.formFiller);
    it("Click on Submit button", elementsPage.clickSubmitBtn);
  });
});
