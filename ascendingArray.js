function ascendingArray(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  let pivot = arr[0];
  //console.log(pivot);
  const left = [];
  const right = [];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
      console.log(arr[i]);
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  const sortedLeft = ascendingArray(left);
  const sortedRight = ascendingArray(right);
  //console.log(sortedLeft)
  return sortedLeft.concat(pivot, sortedRight);
}

const unsorted = [2, 3, 7, 4, 1, 6, 0, 3, 4];
const sorted = ascendingArray(unsorted);
console.log(sorted);
