function findEven(arr) {
  const result = [];
  for (let i = 0; i <= arr.length - 1; i++) {
    if (arr[i] % 2 === 0) {
      result.push(arr[i]);
    }
  }
  return result;
}
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, -8, 19, 9, 10];
console.log(findEven(numbers));
