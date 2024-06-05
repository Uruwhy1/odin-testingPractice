import calculator from '../00-js/calculator.js'

test('sum base', () => {
  expect(calculator.add(2,3)).toBe(5);
})
test('sum negative', () => {
  expect(calculator.add(-3,3)).toBe(0);
})

test('substract base', () => {
  expect(calculator.subtract(3,2)).toBe(1);
})
test('substract negative', () => {
  expect(calculator.subtract(-3,2)).toBe(-5);
})

test('divide base', () => {
  expect(calculator.divide(4,2)).toBe(2);
})
test('divide zero', () => {
  expect(calculator.divide(4,0)).toBe(null);
})

test('multiply base', () => {
  expect(calculator.multiply(4,2)).toBe(8);
})
test('multiply negative', () => {
  expect(calculator.multiply(4,-2)).toBe(-8);
})