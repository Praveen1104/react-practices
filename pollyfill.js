const fArr = [1, 2, 3, 4, 5];
Array.prototype.myFilter = function (cb) {
  console.log(this[3]);
  //console.log(cb(this[0]))
  let arr = [];
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i])) {
      arr.push(this[i]);
    }
  }
  console.log(arr);
};
fArr.myFilter((el) => el > 1);
