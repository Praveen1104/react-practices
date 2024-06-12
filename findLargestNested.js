function findLargestNested(arr) {
  let max = Number.NEGATIVE_INFINITY;
  function traverse(arr) {
    for (let i = 0; i <= arr.length; i++) {
      if (Array.isArray(arr[i])) {
        traverse(arr[i]);
      } else {
        if (arr[i] > max) {
          max = arr[i];
        }
      }
    }
  }
  traverse(arr);
  return max;
}

const array = [
  [3, 4, 58],
  [709, 8, 9, [10, 11]],
  [111, 112]
];
console.log(findLargestNested(array));
