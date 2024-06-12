function getUnique(array) {
  let uniqueArr = [];
  console.log(uniqueArr);
  const seen = {};
  for (let i = 0; i <= array.length-1; i++) {
    const currentItem = array[i]?.name;
    if (!seen[currentItem]) {
      uniqueArr.push(array[i]);
      console.log(uniqueArr)
      seen[currentItem] = true;
    }
  }
  return uniqueArr;
}
let arr = [
  { name: "praveen" },
  { name: "praveen" },
  { name: "bosco" },
  { name: "bosco" },
  { name: "raj" }
];
console.log(getUnique(arr));
