import React, { useState } from 'react';
import './App.css';
import InputFeild from './components/InputFeild';
import { Todo } from "./model";
import TodoList from './components/TodoList';

// FC is a functional component
const App: React.FC = () => {

  const [todo, setTodo] = useState<string>("");
  // use [] to state that it will be an array
  const [todos, setTodos] = useState<Todo[]>([]);

  console.log(todo)

    // we add the e so that the page does not refresh eahc tiem we submit the form
  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    // check first if there is something in the todo
    if(todo){
      // this takes whatever is already in the todos and then we can use , to add another one to it
      setTodos([...todos, { id:Date.now(), todo, isDone:false }]);
      //after we add the item we need to empty the input field
      setTodo("");
    }
  };

  console.log(todos)

  return (
    <div className="App">
      <span className="heading">Taskify</span>
      <InputFeild todo={todo} setTodo={setTodo} handleAdd={handleAdd}/>
      <TodoList todos={todos} setTodos={setTodos}/> 
      
    </div>
  );
}

export default App;
