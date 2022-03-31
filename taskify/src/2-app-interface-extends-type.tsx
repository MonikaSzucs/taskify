import React from 'react';
import './App.css';

// Aliases using type and interface
interface Person {
  name: string;
  age?: number;
}

// to add values from the interface above you just add extends
interface Guy extends Person{
  profession: string
}


type X = {
  a: string;
  b: number;
};

// to add values from X into Y you have to use this:
type Y = {
  c: string;
  d: number;
};

let y: Y = {
  c: 'test',
  d: 42
}

// to add values from X into Y you have to use this:
type Z = X & {
  e: string;
  f: number;
};

function App() {
  return (
    <div className="App">
      Hello World
    </div>
  );
}

export default App;
