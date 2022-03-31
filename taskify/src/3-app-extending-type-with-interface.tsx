import React from 'react';
import './App.css';

// Aliases using type and interface
interface Person {
  name: string;
  age?: number;
}

type X = Person & {
  a: string;
  b: number;
};

type Y =  {
  a: string;
  b: number;
};

interface Person extends Y {
  name: string;
  age?: number;
}



function App() {
  return (
    <div className="App">
      Hello World
    </div>
  );
}

export default App;
