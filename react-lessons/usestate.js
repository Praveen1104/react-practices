import { useState } from "react";

export default function Form() {
  const [name, setName] = useState("Taylor");
  const [age, setAge] = useState(23);

  return (
    <>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={() => setAge(age + 1)}>Increment age</button>
      <button onClick={() => setAge(age - 1)}>Dncrement age</button>
      <p>
        Hello, {name}. You are {age}.
      </p>
    </>
  );
}


{
  /* 
    1.Call useState at the top level of your component to declare one or more state variables.

    useState returns an array with exactly two items:

     The current state of this state variable, initially set to the initial state you provided.
     The set function that lets you change it to any other value in response to interaction.
    */
}
