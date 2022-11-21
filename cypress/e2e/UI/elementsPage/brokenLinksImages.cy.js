import { homePage, elementsPage } from "../../../pages/index";

describe("Checking broken links images tab", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it("Should check and verify broken image", () => {
    homePage.elementsCard().click();
    elementsPage.brokenLinksImagesBtn().click();

    cy.get('img[src="/images/Toolsqa_1.jpg"]')
      .should("not.be.visible")
      .and(($brokenimg) => {
        expect($brokenimg[0].naturalWidth).to.eql(0);
        expect($brokenimg[0].naturalHeight).to.eql(0);
      });
  });
});
