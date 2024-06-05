import caesarShift from "../00-js/caesar.js";

test("base case", () => {
  expect(caesarShift("Hello", 3)).toBe("Khoor");
});
test("text wrapping case", () => {
  expect(caesarShift("XYZ", 3)).toBe("ABC");
});
test("punctuation", () => {
  expect(caesarShift("Hello!", 3)).toBe("Khoor!");
});
test("long phrase", () => {
  expect(caesarShift("HELLO! HOW ARE YOU DOING!", 1)).toBe(
    "IFMMP! IPX BSF ZPV EPJOH!"
  );
});
test("long phrase", () => {
  expect(caesarShift("HELLO! HOW ARE YOU DOING!", -1)).toBe(
    "GDKKN! GNV ZQD XNT CNHMF!"
  );
});


