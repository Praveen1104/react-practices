import { useState, useCallback } from "react";
import ReactDOM from "react-dom/client";

const App = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = useCallback(() => {
    setTodos((t) => [...t, "New Todo"]);
  }, [todos]);

  return (
    <>
     <h2>My Todos</h2>
      {todos.map((todo, index) => {
        return <p key={index}>{todo}</p>;
      })}
      <button onClick={addTodo}>Add Todo</button>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);


{
    /* 
   The React useCallback Hook returns a memoized callback function.
   The useCallback Hook only runs when one of its dependencies update.
   The useCallback and useMemo Hooks are similar. 
   The main difference is that useMemo returns a memoized value and useCallback returns a memoized function.

    */

}