console.log(this,"hi"); // In a browser, this will log the Window object


function showThis() {
    console.log(this);
  }
  showThis(); // Logs the global object (Window in browsers) or undefined in strict mode
  
  const obj = {
    name: 'JavaScript',
    display() {
      console.log(this.name);
    }
  };
  obj.display(); // Logs "JavaScript"
  
  function Person(name) {
    this.name = name;
  }
  const person1 = new Person('Alice');
  console.log(person1.name); // Logs "Alice" Inside a constructor function, this refers to the instance of the object created by the constructor.
  
  const arrow=()=>{
    console.log("arrow",this) //Arrow functions do not have their own this. Instead, they inherit this from the parent scope at the time they are defined.
  }
  arrow()