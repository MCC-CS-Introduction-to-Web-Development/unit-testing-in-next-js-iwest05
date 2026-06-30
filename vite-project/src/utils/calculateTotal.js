// sums an array of numbers
function calculateTotal(numbers) {
  if (numbers.length === 0) {
    return 0;
  }

  let total = 0;
  for (let i = 0; i < numbers.length; i++) {
    total += numbers[i];
  }
  return total;
}

export default calculateTotal;
