describe("checking book store servise", function () {
  let userId;
  let token;
  beforeEach(function () {
    cy.fixture("bookStore.json").then((data) => {
      this.data = data;

      cy.request("POST", "https://demoqa.com/Account/v1/User", {
        userName: this.data.userName,
        password: this.data.password,
      }).then((creatUserResponse) => {
        this.data.userId = creatUserResponse.body.userID;
        userId = creatUserResponse.body.userID;
      });

      cy.request("POST", "https://demoqa.com/Account/v1/GenerateToken", {
        userName: this.data.userName,
        password: this.data.password,
      }).then((generatResponse) => {
        this.data.token = generatResponse.body.token;
        token = generatResponse.body.token;
      });
    });
  });
  afterEach(() => {
    cy.request({
      method: "DELETE",
      url: `https://demoqa.com/Account/v1/User/${userId}`,

      headers: {
        Authorization: "Bearer " + token,
      },
    });
  });

  it("should pass sunny day scenario", function () {
    cy.request({
      method: "POST",
      url: "https://demoqa.com/BookStore/v1/Books",
      headers: {
        Authorization: "Bearer " + this.data.token,
      },
      body: {
        userId: this.data.userId,
        collectionOfIsbns: [
          this.data.books[0],
          this.data.books[1],
          this.data.books[2],
        ],
      },
    })
      .as("addBooks")
      .then((addBooks) => {
        cy.request({
          method: "DELETE",
          url: "https://demoqa.com/BookStore/v1/Book",
          headers: {
            Authorization: "Bearer " + this.data.token,
          },
          body: {
            isbn: this.data.books[1].isbn,
            userId: this.data.userId,
          },
        }).as("deleteABook");
      });
  });

  it("should verify rainy day scenario", function () {
    cy.request({
      method: "POST",
      url: "https://demoqa.com/BookStore/v1/Books",
      headers: {
        Authorization: "Bearer " + this.data.token,
      },
      body: {
        userId: this.data.userId,
        collectionOfIsbns: [this.data.books[7]],
      },
      failOnStatusCode: false,
    }).as("addBooks");

    cy.get("@addBooks").should((addBooksResponse) => {
      expect(addBooksResponse.body.message).to.eql(
        "ISBN supplied is not available in Books Collection!"
      );
      expect(addBooksResponse.status).to.eq(400);
      expect(addBooksResponse.body.code).to.eql("1205");
    });
  });
});
