const request = require("supertest");
const app = require("../index");

test("POST", async () => {
  await request(app)
    .post("/api/v1/authors")
    .send({
      author: { name: "Ryan Holiday 88", age: 36, description: "lorem..." },
    })
    .set("Accept", "application/json")
    .expect("Content-Type", /json/)
    .expect(201);
});

// describe("GET /users", function () {
//   it("responds with json", async function () {
//     const response = await request(app)
//       .get("/api/v1/authors")
//       .set("Accept", "application/json");
//     // expect(response.headers["Content-Type"]).toMatch(/json/);
//     expect(response.status).toEqual(200);
//     // expect(response.body.email).toEqual("foo@bar.com");
//   });
// });
