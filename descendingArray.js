function descendingArray(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  let pivot = arr[0];
  const left = [];
  const right = [];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] >= pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  const sortedLeft = descendingArray(left);
  const sortedRight = descendingArray(right);
  return sortedLeft.concat(pivot, sortedRight);
}

const arr = [2, 3, 4, 7, 8, 9, 10, 12];
console.log(descendingArray(arr));
