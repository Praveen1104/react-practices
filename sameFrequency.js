function isSameFrequncy(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  let arrFreq1 = {};
  let arrFreq2 = {};

  for (let val of arr1) {
    arrFreq1[val] = (arrFreq1[val] || 0) + 1;
  }
  for (let val of arr2) {
    arrFreq2[val] = (arrFreq2[val] || 0) + 1;
  }
  console.log(arrFreq1);
  console.log("2222", arrFreq2);
  for (let key in arrFreq1) {
    console.log(key);
    console.log(arrFreq1[key]);
    if (!key * key in arrFreq2) {
      return false;
    }
    if (arrFreq1[key] !== arrFreq2[key * key]) {
      return false;
    }
  }

  return true;
}

console.log(isSameFrequncy([1, 2, 5], [25, 4, 3]));
