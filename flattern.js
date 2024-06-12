let result = [];
function flatten(arr) {
  for (let i = 0; i < arr.length; i++) {
    // console.log(arr[i]);
    if (Array.isArray(arr[i])) {
      flatten(arr[i]);
    } else {
      result.push(arr[i]);
    }
  }
  return result;
}
const nest = [
  [1, 23, 4],
  [6, 7, 8],5,4
];
console.log(flatten(nest));
