import {useState} from 'react';
import './App.css';
import TodoFooter from './todoFooter';
import TodoForm from './todoForm';
import TodoList from './todoList';

function App() {

  const [todos, setTodos] = useState([
   {
    id: Math.random(),
    text: "Learn Js", 
    isCompleted: false
   },
   {
    id: Math.random(),
    text: "Learn Css", 
    isCompleted: false
   },
   {
    id: Math.random(),
    text: "Learn React", 
    isCompleted: false
   }      
  ]);

  return (

    <div className="App">
     
     <p className="headerp" > todos </p>

      <TodoForm onAdd={(text) => {
        setTodos([
          ...todos,
        {
          id: Math.random(),
          text: text, 
          isCompleted: false
         }      
        ])
      }} />
      <TodoList
      todos={todos}
      onDelete={(todo) => {
        setTodos(todos.filter((t) => t.id !== todo.id));
      }}   
      onChange={(newTodo) => {
        setTodos(todos.map((todo) => {
        if(todo.id == newTodo.id) {
          return newTodo;
        }
        return todo;
      }));
      }}
          
      
      />
      <TodoFooter todos={todos} onClearCompleted={() =>{
        setTodos(todos.filter((todo) => !todo.isCompleted));
      }} />
    </div>
  );
}

export default App;
