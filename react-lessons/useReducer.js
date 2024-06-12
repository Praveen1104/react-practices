import { useReducer } from "react";
function reducer(state, action) {
  if (action.type === "incremented_age") {
    return {
      age: state.age + 1,
    };
  }
  if (action.type === "decremented_age") {
    return {
      age: state.age - 1,
    };
  }
  throw Error("Unknown action.");
}
export default function Counter() {
  const [state, dispatch] = useReducer(reducer, { age: 22 });

  return (
    <>
      <button
        onClick={() => {
          dispatch({ type: "incremented_age" });
        }}
      >
        Increment age
      </button>
      <p>Hello! You are {state.age}.</p>
      <button
        onClick={() => {
          dispatch({ type: "decremented_age" });
        }}
      >
        Decrement age
      </button>
    </>
  );
}

{
  /* 
The useReducer Hook is similar to the useState Hook.

It allows for custom state logic.

If you find yourself keeping track of multiple pieces of state that rely on complex logic, 
useReducer may be useful.

The useReducer Hook accepts two arguments.

useReducer(<reducer>, <initialState>)

The reducer function contains your custom state logic and the initialState can be a simple
 value but generally will contain an object.

The useReducer Hook returns the current state and a dispatch method.
*/
}
