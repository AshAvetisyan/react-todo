import "./todoForm.css";
import { useState } from "react";

function TodoForm({onAdd}) {

  const [text, setText] = useState("");

  return (
      <form className="todoForm" onSubmit={(e) => {
        e.preventDefault();
        onAdd(text);
        setText("");
      }}>
        <input className="headerInput" type="text" value={text} onChange={(e) => {
            setText(e.target.value);
        }}/>
        <button className="headerBtn" >Add</button>
      </form>
  )
}

export default TodoForm;