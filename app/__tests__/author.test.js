const request = require("supertest");
const app = require("../index");
const Author = require("../models/Author");

// beforeAll(async () => {});

beforeEach(async () => {
  await Author.create({
    name: "Ryan Holiday",
    age: 36,
    description: "lorem",
  });
  await Author.create({
    name: "Bobby Lee",
    age: 53,
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

  it("responds with authors between 30-50", async function () {
    const response = await request(app)
      .get("/api/v1/authors?age[gt]=30&age[lt]=50")
      .set("Accept", "application/json");

    // console.log("Response:", response.header); // Add this line for debugging
    expect(response.header["content-type"]).toMatch(/json/);
    expect(response.status).toEqual(200);
    console.log("Response body:", response.body); // Add this line for debugging
    // Assuming data is an array with a single object
    expect(response.body).toHaveProperty("data");
    expect(Array.isArray(response.body.data)).toBe(true);
    expect(response.body.data.length).toBe(1);

    // Ensure the object in the array has the expected properties
    const [authorObject] = response.body.data;
    expect(authorObject).toHaveProperty("_id");
    expect(authorObject).toHaveProperty("name");
    expect(authorObject).toHaveProperty("age");
    expect(authorObject).toHaveProperty("description");
    //exact match the object
    expect(authorObject.name).toEqual("Ryan Holiday");
  });
});

// describe("POST route", function () {
//   test("POST", async () => {
//     await request(app)
//       .post("/api/v1/authors")
//       .send({
//         author: { name: "Ryan Holiday 89", age: 36, description: "lorem..." },
//       })
//       .set("Accept", "application/json")
//       .expect("Content-Type", /json/)
//       .expect(201);
//   });
// });
