import React, { useState } from "react";
import { Contener, Main } from "./main";

function Todo() {
  const [todo, settodo] = useState([
    { id: 1, title: "Create the portfolio ", completed: false, p: 1 },
    { id: 2, title: "Create a new todo...", completed: false, p: 1 },
    { id: 3, title: "Create a new todo... ", completed: false, p: 1 },
    { id: 4, title: "Create a new todo... ", completed: false, p: 1 },
  ]);
  const [onchange, setOnchage] = useState({
    inp: null,
    checked:false
  });
  
  let changea = (e) => {
    const { value } = e.target;
    setOnchage({ ...onchange, inp: value });
  };
  let click = () => {
    settodo({ ...todo, age: 1 });
  };
//   let checkbx=(e)=>{
//     let res =todo.filter(m=>(m.id===e))
//     res =res.map(v=>v.completed).join("")
    
// }
// console.log(settodo[todo]);

  return (
    <Main>
      <div className="main">
        <input
          onChange={changea}
          type="text"
          placeholder="Create a new todo..."
        />
        <button onClick={click}>+</button>
        <h1>{todo.age}</h1>
        <h1>{onchange.inp}</h1>
      </div>
      <Contener>
        {todo.map((v) => (
          <div className="box" key={v.id}>
            {/* <input onClick={()=>checkbx(v.id)}  type="checkbox" /> <p>{v.title}</p> */}
            <div>
              <button>{"<"}</button>
              <p>{v.p}</p>
              <button>{">"}</button>
            </div>
          </div>
        ))}
      </Contener>
    </Main>
  );
}

export default Todo;
