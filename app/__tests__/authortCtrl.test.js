const { getAuthors } = require("../controllers/authorCtrl");

// Mocking the Author model
const Author = require("../models/Author");

// Mock the response object
const mockResponse = () => {
  const res = {};
  res.json = jest.fn().mockReturnValue(res);
  res.status = jest.fn().mockReturnValue(res);
  return res;
};

// Mock the Author model's find method
jest.mock("../models/Author", () => ({
  find: jest.fn(),
}));

describe("getAuthors controller", () => {
  afterEach(() => {
    jest.restoreAllMocks();
    jest.resetAllMocks();
  });

  it("should respond with authors data with just the name property", async () => {
    // Mock the request object
    const mockRequest = {
      query: { select: "name" },
    };

    // Mock the data returned by the Author model
    const mockAuthorsData = [
      { name: "Author 1", createdAt: new Date() },
      { name: "Author 2", createdAt: new Date() },
    ];

    const res = mockResponse();

    await getAuthors(mockRequest, res);

    // Assertions
    expect(Author.find().select).toHaveBeenCalledWith("name");
    // expect(Author.find().sort).toHaveBeenCalledWith("createdAt");
    // expect(Author.find().skip).toHaveBeenCalledWith(0);
    // expect(Author.find().limit).toHaveBeenCalledWith(2);
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith({
      data: mockAuthorsData,
      success: true,
      message: "GET - Author request made",
    });
  });

  it('should respond with "Not Found" if no authors are found', async () => {
    // Mock the request object
    const mockRequest = {
      query: { select: "name" },
    };

    // Mock the data returned by the Author model as an empty array
    Author.find.mockResolvedValue([]);

    // Mock the response object
    const res = mockResponse();

    // Execute the controller function
    await getAuthors(mockRequest, res);

    // Assertions
    expect(res.status).toHaveBeenCalledWith(404);
    expect(res.json).toHaveBeenCalledWith({
      error: "Not Found",
      success: false,
      message: "No Authors found with that citeria",
    });
  });
});

// describe("Author Controller", () => {
//   test("create new author", () => {
//     //
//   });
// });

// const { getUser } = require("../controllers/userController");

// Mock the response object
// const mockResponse = () => {
//   const res = {};
//   res.json = jest.fn().mockReturnValue(res);
//   return res;
// };

// describe("getUser controller", () => {
//   it("should respond with user data", async () => {
//     // Make the test function asynchronous
//     const mockRequest = {
//       query: { select: "name" },
//     };

//     const res = mockResponse();

//     // Use async/await to handle the asynchronous controller function
//     await getAuthors(mockRequest, res);

//     // Assertions
//     expect(res.json).toHaveBeenCalledWith({ id: "123" });
//   });
// });

// describe("getAuthors controller", () => {
//   it("should respond with user data", () => {
//     const mockRequest = {
//       params: { id: "123" },
//       query: { select: "name" }, // Add a query parameter for testing
//     };
//     const res = mockResponse();

//     getAuthors(mockRequest, res);

//     // Assertions
//     expect(res.json).toHaveBeenCalledWith({ id: "123" });
//   });
// });
