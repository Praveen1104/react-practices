let count = 0;
const getData = () => {
  console.log("Fetching", count++);
};

let bounce=document.getElementById('bounce')
const doSomeMagic = function (fn, d) {
  let timer;
  return function () {
    let context = this;
    args = arguments;
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(context, args);
    }, d);
  };
};
bounce.addEventListener('keyup',doSomeMagic(getData,3000))

//2
let button = document.getElementById("debounce");
const debounce = (func, delay) => {
  let debounceTimer;
  return function () {
    const context = this;
    const args = arguments;
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => func.apply(context, args), delay);
  };
};
button.addEventListener(
  "click",
  debounce(function () {
    console.log("hi")
    alert(
      "Hello\nNo matter how many times you" +
        "click the debounce button, I get " +
        "executed once every 3 seconds!!"
    );
  }, 3000)
);
