import React, { useState } from "react";

function Todo() {
  const [todo, settodo] = useState([]);
  const [onchange, setOnchage] = useState({
    inp: null,
  });
  let change = (e) => {
    const { value } = e.target;
    setOnchage({ ...onchange, inp: value });
  };
  let click = () => {
    settodo({ ...todo, age: onchange.inp });
  };
  return (
    <div>
      <input onChange={change} type="text" placeholder="Create a new todo..." />
      <button onClick={click}>+</button>
      <h1>{todo.age}</h1>
      <h1>{onchange.inp}</h1>
      <div>{
        console.log(todo.age)
        }</div>
    </div>
  );
}

export default Todo;
