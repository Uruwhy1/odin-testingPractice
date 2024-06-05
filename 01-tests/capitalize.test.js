import capitalize from '../00-js/capitalize.js'

test('capitalize word', () => {
  expect(capitalize("hello")).toBe("Hello");
});

test('already capitalized word', () => {
  expect(capitalize("Hello")).toBe("Hello");
});

test('empty strings', () => {
  expect(capitalize("")).toBe(null);
});

test('not a string', () => {
  expect(capitalize(2)).toBe(null)
})