import { useState, createContext } from "react";
import ReactDOM from "react-dom/client";
const UserContext = createContext();
export default function Component1(props) {
  const [user, setUser] = useState("Jesse Hall");

  return (
    <UserContext.Provider value={user}>
      {props.children}
    </UserContext.Provider>
  );
}


import { useState, createContext, useContext } from "react";
export default function Component5() {
    const user = useContext(UserContext);
  
    return (
      <>
        <h1>Component 5</h1>
        <h2>{`Hello ${user} again!`}</h2>
      </>
    );
  }

  {
    /*
    React Context is a way to manage state globally.

It can be used together with the useState Hook to share state between deeply nested components
 more easily than with useState alone.

State should be held by the highest parent component in the stack that requires access to the state.

To illustrate, we have many nested components. The component at the top and
 bottom of the stack need access to the state.

To do this without Context, we will need to pass the state as "props" through each nested component. 
This is called "prop drilling".

*/
  }