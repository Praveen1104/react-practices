function removeDuplictes(array) {
  let uniqueArr = [];
  for (let i = 0; i <= array.length - 1; i++) {
    if (uniqueArr.indexOf(array[i]) == -1) {
      uniqueArr.push(array[i]);
    }
  }
  return uniqueArr;
}

console.log(removeDuplictes([1, 2, 3, 1, 2, 3, 4,5, 5, 6, 7, 7]));
