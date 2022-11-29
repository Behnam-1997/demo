import {Given, Then, When} from "@badeball/cypress-cucumber-preprocessor";
import {elementsPage,homePage}from "../../../pages";

Given('The user visits demoqa.com for checking broken images tab', () => {
  cy.visit("/")
})
When ('The user opens elements page for checking broken images tab', ()=>{
  homePage.elementsCard().click()
})
Then ('The user opens broken images tab', ()=>{
  elementsPage.clickBrokenLinksImagesBtn()
})
Then ('The user realize first image is broken', ()=>{
    elementsPage.elements.theBrokenImg()
      .should("not.be.visible")
      .and((brokenImg) => {
        expect(brokenImg[0].naturalWidth).to.eql(0);
        expect(brokenImg[0].naturalHeight).to.eql(0);
      });
})