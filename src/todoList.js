import TodoItem from "./todoItem"

function TodoList({todos, onDelete, onChange}) {
  return <div>
      {
        todos.map((todo) => {
            return (
            <div className="ListClass" key={todo.id}>
               <TodoItem 
               key={todo.id} 
               todo={todo}
               onChange={onChange}
               onDelete={onDelete}
               />
            </div>
            )
        })
      }
  </div>
} 

export default TodoList;