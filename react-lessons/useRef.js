import { useRef } from 'react';

export default function Form() {
  const inputRef = useRef(null);

  function handleClick() {
    inputRef.current.focus();
  }

  return (
    <>
      <input ref={inputRef} />
      <button onClick={handleClick}>
        Focus the input
      </button>
    </>
  );
}
import { useRef } from 'react';

export default function Counter() {
  let ref = useRef(1);

  function handleClick() {
    ref.current = ref.current + 1;
    alert('You clicked ' + ref.current + ' times!');
  }

  return (
    <div><button onClick={handleClick}>
      Click me!
    </button>
    <h1>{ref.current}</h1></div>
  );
}

{/* 

It can be used to access a DOM element directly.
useRef() only returns one item. It returns an Object called current.
When we initialize useRef we set the initial value: useRef(0).

It's like doing this: const count = {current: 0}. We can access the count by using count.current.
*/}