export class ElementsPage {
    elements = {
        webTableBtn: () => cy.contains("Web Tables"),
        brokenLinksImagesBtn: () => cy.contains("Broken Links - Images"),
        addNewRecordBtn: () => cy.get("#addNewRecordButton"),
        firstNameInput: () => cy.get("#firstName"),
        lastNameInput: () => cy.get("#lastName"),
        userEmailInput: () => cy.get("#userEmail"),
        ageInput: () => cy.get("#age"),
        salaryInput: () => cy.get("#salary"),
        departmentInput: () => cy.get("#department"),
        submitBtn: () => cy.get("#submit"),
        theBrokenImg: () => cy.get('img[src="/images/Toolsqa_1.jpg"]'),
        allTableRows: () => cy.get(".rt-tr-group"),
        aTableRow: () => cy.get(".rt-td"),
        editARowBtn : () => cy.get("[id^=edit-record]")
    }

    clickBrokenLinksImagesBtn() {
        this.elements.brokenLinksImagesBtn().click();
    }
}
