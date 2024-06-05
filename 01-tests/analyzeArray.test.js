import analyzeArray from "../00-js/analyzeArray.js";

test("base case", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toStrictEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});
test("empty array", () => {
  expect(analyzeArray()).toStrictEqual(null);
});
test("not an array", () => {
  expect(analyzeArray("xD")).toStrictEqual(null);
});
