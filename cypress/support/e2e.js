describe("DataForm", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("should submit form data", () => {
    const firstName = "John";
    const lastName = "Doe";
    const password = "password123";

    cy.get("input[name=firstName]").type(firstName);
    cy.get("input[name=lastName]").type(lastName);
    cy.get("input[name=password]").type(password);
    cy.get("input[name=confirmPassword]").type(password);
    cy.get("button[type=submit]").click();

    cy.wait(1000); // wait for the response from the API

    // Assert that the form data was sent successfully
    cy.on("window:alert", (str) => {
      expect(str).to.equal("Data sent successfully");
    });
    // cy.get("#alert").contains("Data sent successfully");
  });
});
