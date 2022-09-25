import "./todoItem.css";

function TodoItem({todo, onChange, onDelete}) {
    return(
      <div className="eachList">
          <label className="Label">
              <input className="eachInput" type="checkbox" checked={todo.isCompleted} onChange={(e) => {
                  onChange({
                      ...todo, 
                      isCompleted: e.target.checked
                  });
              }} />
              {todo.text}
              <button className="addBtn" onClick={() => {
                  onDelete(todo)
              }}>X</button>
          </label>
      </div>
    )
}

export default TodoItem;