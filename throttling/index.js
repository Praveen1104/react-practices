let btn = document.querySelector(".throttle");
let btnpressed = document.querySelector(".presscount");
let throttlecount = document.querySelector(".throttlecount");

var pressedcount = 0;
var triggercount = 0;
const start = new Date().getTime();
const myThrottle = (cb, d) => {
  let last = 0;
  return (...args) => {
    let now = new Date().getTime();
    if (now - last < d) return;
    last = now;
    console.log(args)
    return cb(...args);
  };
};
var throttled = myThrottle(() => {
  triggercount += 1;
  throttlecount.innerHTML = triggercount;
}, 1000);

btn.addEventListener("click", () => {
  btnpressed.innerText = pressedcount++;
  const now = new Date().getTime();
  const seconds = (now - start) / 1000;
  console.log(seconds.toFixed());
  throttled();
});
