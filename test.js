const request = require("supertest");
const tape = require("tape");

const app = require("./app"); // The Express.js API

tape("DataForm", (t) => {
  t.test("should submit form data", (st) => {
    const data = {
      firstName: "John",
      lastName: "Doe",
      password: "password123",
      confirmPassword: "password123",
    };

    request(app)
      .post("/data")
      .send(data)
      .expect(200)
      .end((err, res) => {
        st.error(err, "No error");
        st.equal(
          res.body.message,
          "Data sent successfully",
          "Data sent successfully"
        );
        st.end();
      });
  });
});
