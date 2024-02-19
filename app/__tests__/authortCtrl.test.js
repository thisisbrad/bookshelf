const { getAuthors } = require("../controllers/authorCtrl");
const mongoose = require("mongoose");

// Mocking the Author model
const Author = require("../models/Author");

// Mocking the Author model
jest.mock("../models/Author");

const mockResponse = () => {
  const res = {};
  res.json = jest.fn().mockReturnValue(res);
  res.status = jest.fn().mockReturnValue(res);
  return res;
};

describe("Your test suite", () => {
  afterEach(() => {
    jest.restoreAllMocks();
    jest.resetAllMocks();
  });

  it("should mock chained function", async () => {
    // Mock the chained function 'select' on the model instance
    const mockSelect = jest
      .fn()
      .mockReturnValueOnce(/* your mock data or query result */);
    const mockFind = jest
      .spyOn(Author, "find")
      .mockReturnValueOnce({ select: mockSelect });
    // Assertion or further test logic based on the mocked data

    const mockRequest = {
      query: { select: "name" },
    };

    Author.find = mockFind;

    const res = mockResponse();

    const result = await getAuthors(mockRequest, res);
    // Log to check if the mock is being called
    console.log(mockFind.mock.calls);
    console.log(mockSelect.mock.calls);
    // Log to check if the result is as expected
    console.log(result);
    // Restore the original method after the test
    // mockFind.mockRestore();
  });
});
