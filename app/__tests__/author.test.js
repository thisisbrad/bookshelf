const request = require("supertest");
const app = require("../index");
const Author = require("../models/Author");

// beforeAll(async () => {
//   await mongoose.connect(process.env.MONGO_TEST_URI);
// });

afterEach(async () => {
  const { collections } = mongoose.connection;
  for (const key in collections) {
    const collection = collections[key];
    await collection.dropMany();
  }
});

// afterAll(async () => {
//   await mongoose.connection.dropDatabase();
//   await mongoose.connection.close();
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
