const moveZero = (arr) => {
  let c = 0;
  const n = arr.length;
  for (let i = 0; i < n; i++) {
    if (arr[i] !== 0) {
      [arr[i], arr[c]] = [arr[c], arr[i]];
      c++;
    }
  }
  return arr;
};
console.log(moveZero([8, 5, 0, 10, 0, 20]));
