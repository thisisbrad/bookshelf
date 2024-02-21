const request = require("supertest");
const app = require("../index");
const Author = require("../models/Author");

// beforeAll(async () => {});

beforeEach(async () => {
  const author = await Author.create({
    name: "Ryan Holiday",
    age: 36,
    description: "lorem",
  });
});

afterEach(async () => {
  await Author.deleteMany();
});

// afterAll(async () => {
// });

describe("GET /users", function () {
  it("responds with json", async function () {
    const response = await request(app)
      .get("/api/v1/authors")
      .set("Accept", "application/json");

    // console.log("Response:", response.header); // Add this line for debugging
    expect(response.header["content-type"]).toMatch(/json/);
    expect(response.status).toEqual(200);
    console.log("Response body:", response.body); // Add this line for debugging
    // expect(response.body.email).toEqual("foo@bar.com");
  });

  test("POST", async () => {
    await request(app)
      .post("/api/v1/authors")
      .send({
        author: { name: "Ryan Holiday 89", age: 36, description: "lorem..." },
      })
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(201);
  });
});
