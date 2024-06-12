useEffect(() => {
    //Runs only on the first render
  }, []);
  import { useState, useEffect } from "react";
  import ReactDOM from "react-dom/client";
  
  function Counter() {
    const [count, setCount] = useState(0);
    const [calculation, setCalculation] = useState(0);
  
    useEffect(() => {
      setCalculation(() => count * 2);
    }, [count]); // <- add the count variable here
  
    return (
      <>
        <p>Count: {count}</p>
        <button onClick={() => setCount((c) => c + 1)}>+</button>
        <p>Calculation: {calculation}</p>
      </>
    );
  }
  
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<Counter />);
  
  {
    /*
    The useEffect Hook allows you to perform side effects in your components.

Some examples of side effects are: fetching data, directly updating the DOM, and timers.

useEffect accepts two arguments. The second argument is optional.

useEffect(<function>, <dependency>)

We should always include the second parameter which accepts an array. 
We can optionally pass dependencies to useEffect in this array.
   
Using useEffect we can apply lifecycle methods in functional components

Using componentDidMount in functional components with useEffect
Using the componentDidUpdate with useEffect
Using componentWillUnmount with useEffect
*/ 
  }