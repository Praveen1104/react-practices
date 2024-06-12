function memoize(fun) {
  const cache = {};
  return function (...args) {
    const key = JSON.stringify(args);
    // console.log(cache);
    // console.log("key--",key);
    //console.log("f--",fun)
    if (!cache[key]) {
      cache[key] = fun.apply(this, args);
      //console.log(this)
      console.log("args",args)
    }
    return cache[key];
  };
}
function add(a, b) {
  console.log("calculating");
  return a + b;
}
const memoizedsum = memoize(add);
console.log(memoizedsum(4, 5));
console.log(memoizedsum(6, 7));
console.log(memoizedsum(6, 7));
