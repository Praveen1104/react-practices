function sortedData(arr1, arr2) {
  let i = 1;
  let j = 1;
  let array1 = arr1[0];
  let array2 = arr2[0];
  let mergedArray = [];

  while (array1 || array2) {
    if (array2 === undefined || array1 < array2) {
      mergedArray.push(array1);
      array1 = arr1[i];
      i++;
    } else {
      mergedArray.push(array2);
      array2 = arr2[j];
      j++;
    }
  }
  console.log(mergedArray);
}
sortedData([1,2,3,5],[2,6,8,9])