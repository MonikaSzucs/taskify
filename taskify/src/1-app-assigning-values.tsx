import React from 'react';
import './App.css';

// in typescript you need to write that it is a string
let name: string = "Monika";

// use the union symbol to make it either number or string
let age: number | string;
let isStudent: boolean;
// array of strings
let hobbies: string[];
// tuple - has a fixed amount of values and types
let role: [number, string];

age = "twenty";

function printName(name:string){
  console.log(name)
}

printName("Monika")

// Objects
// the question mark will make one of them optional
type Person = {
  name: string;
  age?: number;
};
let person: Person = {
  name: "Monika",
}

let lotsOfPeople: Person[];

// this is recommended instead of any
let personName: unknown;
// if you want a variable to return anything use the word any
let name2: any;
// if you use the word never then it will not return anything

// This means you will not be able to assignment a number to the variable name because it is defined as a string
// if you do it will give an error
// name = 5;
name = "Monika"

function App() {
  return (
    <div className="App">
      Hello World
    </div>
  );
}

export default App;
