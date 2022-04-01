import React, { useState } from 'react';
import './App.css';
import InputFeild from './components/InputFeild';

// FC is a functional component
const App: React.FC = () => {

  const [todo, setTodo] = useState<string | number>("");

  console.log(todo)

  return (
    <div className="App">
      <span className="heading">Taskify</span>
      <InputFeild todo={todo} setTodo={setTodo}/>
    </div>
  );
}

export default App;
