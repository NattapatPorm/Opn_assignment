import { expect } from "@jest/globals";
import calculateDistance from "../utils/calculateDistance";

describe("calculate distance suite", () => {
  it("Can calculate distance", () => {
    const mockBranchesAxis = [1, 2];
    const mockCustomerAxis = [3, 5];
    let result;

    try {
      result = calculateDistance(mockBranchesAxis, mockCustomerAxis);
    } catch (err) {
      console.error("err.type : ", err.message);
    }

    const {result: testResult} = result

    expect(typeof testResult).toBe("number");
  });

  it("Cannot calculate distance becuase branchAxis is not array", () => {
    const mockBranchesAxis = 1;
    const mockCustomerAxis = 2;
    let result;

    try {
      result = calculateDistance(mockBranchesAxis, mockCustomerAxis);
    } catch (err) {
      console.error("err.type : ", err.message);
    }

    expect(result).toBeUndefined();
  });

  it("Cannot calculate distance becuase xAxis and yAxis is not number", () => {
    const mockBranchesAxis = [true, "a"];
    const mockCustomerAxis = ["a", false];
    let result;

    try {
      result = calculateDistance(mockBranchesAxis, mockCustomerAxis);
    } catch (err) {
      console.error("err.type : ", err.message);
    }

    const { result: testResult } = result;

    expect(testResult).toBeNaN();
  });
});
