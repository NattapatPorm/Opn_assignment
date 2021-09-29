import { expect } from "@jest/globals";
import getMinValue from "../utils/getMinValue";

describe("get min value suite", () => {
  it("Can get min value", () => {
    const mockArr = [
      { result: 13, key: 0, name: "Ladprao", currentStock: 7 },
      { result: 5, key: 1, name: "Ekkamai", currentStock: 3 },
      { result: 8, key: 2, name: "Bangmod", currentStock: 2 },
    ];
    let result;

    try {
      result = getMinValue(mockArr);
    } catch (err) {
      console.error("err : ", err.message);
    }

    expect(result).toMatchObject({
      result: 5,
      key: 1,
      name: "Ekkamai",
      currentStock: 3,
    });
  });

  it("Cannot get min value because array is empty", () => {
    const mockArr = [];
    let result;

    try {
      result = getMinValue(mockArr);
    } catch (err) {
      console.error("err : ", err.message);
    }

    expect(result).toBeUndefined();
  });

  it("Cannot get min value because data is not array", () => {
    const mockArr = {};
    let result;

    try {
      result = getMinValue(mockArr);
    } catch (err) {
      console.error("err : ", err.message);
    }

    expect(result).toBeUndefined();
  });
});
