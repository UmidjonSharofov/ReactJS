import React, { useState } from "react";
import { Contener, Main } from "./main";

function Todo() {
  const [items, setitmes] = useState([
    { id: 1, title: "Create the portfolio ", completed: false },
    { id: 2, title: "Create a new todo...", completed: false },
    { id: 3, title: "Create a new todo... ", completed: false },
    { id: 4, title: "Create a new todo... ", completed: false },
  ]);
  const [inpu, setinpu] = useState({
    inpu: null,
  });
  let chan = (e, id) => {
    const { checked } = e.target;
    let res = items.map((v) =>
      v.id === id ? { ...v, completed: checked } : v
    );
    setitmes(res);
  };
  let inp = (e) => {
    const { value } = e.target;
    setinpu({ ...inpu, inpu: value });
  };
  let clik =(e)=>{
     let res ={id:items.length+1,title:e,completed:false}
     setitmes([...items,res])
  }
  console.log(items);
  return (
    <Main>
      <div className="main">
        <input onChange={inp} />
        <button onClick={()=>clik(inpu.inpu)}>+</button>
      </div>
      <Contener>
        {items.map((v) => (
          <div key={v.id}>
            <input type={"checkbox"} onChange={(e) => chan(e, v.id)} />
            <p>{v.id}</p>
            <p style={{textDecoration: v.completed&&'line-through' }}>{v.title}</p>
          </div>
        ))}
      </Contener>
    </Main>
  );
}
export default Todo;
