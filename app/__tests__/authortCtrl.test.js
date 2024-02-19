const { getAuthors } = require("../controllers/authorCtrl");
const mongoose = require("mongoose");
require("dotenv").config();

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
  beforeEach(async () => {
    await mongoose.connect(process.env.MONGO_URI);
  });
  afterEach(async () => {
    jest.restoreAllMocks();
    jest.resetAllMocks();
    await mongoose.connection.close();
  });

  it("should mock chained function", async () => {
    // Mock the chained function 'select' on the model instance
    const mockSelect = jest
      .fn()
      .mockReturnValueOnce(/* your mock data or query result */);

    // Mock the 'exec' method to return a resolved promise with mock data
    // const mockExec = jest
    //   .fn()
    //   .mockResolvedValueOnce([{ name: "John Doe" }, { name: "Jane Doe" }]);

    // , exec: mockExec
    const mockFind = jest
      .spyOn(Author, "find")
      .mockImplementation(() => ({ select: mockSelect }));

    // Your test logic here
    const mockRequest = {
      query: { select: "name" },
    };

    const res = mockResponse();

    const result = await getAuthors(mockRequest, res);

    // Assertion or further test logic based on the mocked data

    // Log to check if the mock is being called
    console.log(mockFind.mock.calls);
    console.log(mockSelect.mock.calls);
    // console.log("exe", mockExec.mock.calls);

    // Log to check if the result is as expected
    console.log(result);
    console.log(res.json.mock.calls[0][0]);

    // Restore the original method after the test
    mockFind.mockRestore();
  });
});
