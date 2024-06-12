let arr = ["praveen"];
let object = {
  name: "praveen",
  city: "salem",
  getinfo: function () {
    console.log(this.name + "from" + this.city);
  }
};
function fun() {}
console.log(fun.prototype.__proto__);

let object2 = {
  name: "bosco"
};
object2.__proto__ = object;
console.log(object2.__proto__.__proto__);
