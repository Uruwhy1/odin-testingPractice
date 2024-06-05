import reverse from '../00-js/reverseString.js'

test('base case', () => {
  expect(reverse("hello")).toBe("olleh")
})
test('not a string', () => {
  expect(reverse(342)).toBeNull()
})
test('empty string', () => {
  expect(reverse("")).toBeNull()
})
