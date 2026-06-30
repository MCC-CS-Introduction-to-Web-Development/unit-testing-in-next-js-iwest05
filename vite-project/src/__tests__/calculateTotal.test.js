import calculateTotal from '../utils/calculateTotal';

describe('calculateTotal', () => {

  // positive numbers
  test('adds positive numbers correctly', () => {
    expect(calculateTotal([1, 2, 3])).toBe(6);
  });

  test('adds larger positive numbers', () => {
    expect(calculateTotal([10, 20, 30, 40])).toBe(100);
  });

  // negative numbers
  test('adds negative numbers correctly', () => {
    // -1 + -2 + -3 = -7 ... i think
    expect(calculateTotal([-1, -2, -3])).toBe(-7);
  });

  test('handles mix of positive and negative numbers', () => {
    expect(calculateTotal([-5, 10, -3, 8])).toBe(10);
  });

  // zeros
  test('returns 0 for an empty array', () => {
    expect(calculateTotal([])).toBe(0);
  });

  test('handles array with only zeros', () => {
    expect(calculateTotal([0, 0, 0])).toBe(0);
  });

  test('handles zero mixed with other numbers', () => {
    expect(calculateTotal([5, 0, 3])).toBe(8);
  });

  // edge cases
  test('handles single element array', () => {
    expect(calculateTotal([42])).toBe(42);
  });

  test('handles large numbers', () => {
    expect(calculateTotal([1000000, 2000000])).toBe(3000000);
  });
});
