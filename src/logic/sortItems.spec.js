import sortItems from "./sortItems.js";

describe("Sorts objects values from a-z", () => {
  it("sorting by the first property", () => {
    const obj1 = [
      { userInput: "potato", doneItem: false, userCheck: false },
      { userInput: "banana", doneItem: false, userCheck: false },
      { userInput: "rice", doneItem: false, userCheck: false },
      { userInput: "cereal", doneItem: false, userCheck: false },
    ];
    const expected = [
      { userInput: "banana", doneItem: false, userCheck: false },
      { userInput: "cereal", doneItem: false, userCheck: false },
      { userInput: "potato", doneItem: false, userCheck: false },
      { userInput: "rice", doneItem: false, userCheck: false },
    ];
    expect(sortItems(obj1, "Alphabetical")).toEqual(expected);
  });
});
