const { getAuthors } = require("../controllers/authorCtrl");
const mongoose = require("mongoose");

// Mocking the Author model
const Author = require("../models/Author");

const mockResponse = () => {
  const res = {};
  res.json = jest.fn().mockReturnValue(res);
  res.status = jest.fn().mockReturnValue(res);
  return res;
};

describe("Your test suite", () => {
  it("should mock chained function", async () => {
    // Mock the chained function 'select' on the model instance
    const mockSelect = jest
      .fn()
      .mockReturnValueOnce(/* your mock data or query result */);
    const mockFind = jest
      .spyOn(Author, "find")
      .mockReturnValueOnce({ select: mockSelect });

    // Your test logic here

    // For example:
    const mockRequest = {
      query: { select: "name" },
    };

    Author.find = mockFind;

    const res = mockResponse();

    const result = await getAuthors(mockRequest, res);
    // const result = await Author.find().select("field1 field2");

    // Assertion or further test logic based on the mocked data

    // Log to check if the mock is being called
    console.log(mockFind.mock.calls);
    console.log(mockSelect.mock.calls);

    // Log to check if the result is as expected
    console.log(result);

    // Restore the original method after the test
    mockFind.mockRestore();
  });
});

// // Mock the response object
// const mockResponse = () => {
//   const res = {};
//   res.json = jest.fn().mockReturnValue(res);
//   res.status = jest.fn().mockReturnValue(res);
//   return res;
// };

// // Mock the Author model's find method
// jest.mock("../models/Author", () => ({
//   find: jest.fn(),
// }));

// describe("getAuthors controller", () => {
//   afterEach(() => {
//     jest.restoreAllMocks();
//     jest.resetAllMocks();
//   });

//   it("should respond with authors data with just the name property", async () => {
//     // Mock the request object
//     const mockRequest = {
//       query: { select: "name" },
//     };

//     // Mock the data returned by the Author model
//     const mockAuthorsData = [
//       { name: "Author 1", createdAt: new Date() },
//       { name: "Author 2", createdAt: new Date() },
//     ];

//     const mockSelect = jest
//       .fn()
//       .mockReturnValueOnce(/* your mock data or query result */);
//     const mockFind = jest.fn().mockReturnValueOnce({ select: mockSelect });

//     Author.find = mockFind;

//     const res = mockResponse();

//     await getAuthors(mockRequest, res);

//     // Assertions
//     expect(Author.find().select).toHaveBeenCalledWith("name"); // Applying select directly to the query
//     // expect(selectSpy).toHaveBeenCalledWith("name");
//     // expect(Author.find().sort).toHaveBeenCalledWith("createdAt");
//     // expect(Author.find().skip).toHaveBeenCalledWith(0);
//     // expect(Author.find().limit).toHaveBeenCalledWith(2);
//     expect(res.status).toHaveBeenCalledWith(200);
//     expect(res.json).toHaveBeenCalledWith({
//       data: mockAuthorsData,
//       success: true,
//       message: "GET - Author request made",
//     });
//   });

//   it('should respond with "Not Found" if no authors are found', async () => {
//     // Mock the request object
//     const mockRequest = {
//       query: { select: "name" },
//     };

//     // Mock the data returned by the Author model as an empty array
//     Author.find.mockResolvedValue([]);

//     // Mock the response object
//     const res = mockResponse();

//     // Execute the controller function
//     await getAuthors(mockRequest, res);

//     // Assertions
//     expect(res.status).toHaveBeenCalledWith(404);
//     expect(res.json).toHaveBeenCalledWith({
//       error: "Not Found",
//       success: false,
//       message: "No Authors found with that citeria",
//     });
//   });
// });

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
