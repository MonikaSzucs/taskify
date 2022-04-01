import React from 'react';
import './styles.css';

interface Props{
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    handleAdd:(e: React.FormEvent)=> void;
}

const InputFeild = ({todo, setTodo, handleAdd}: Props) => {
  return (
    <form className='input' onSubmit={handleAdd}>
      <input value={todo} 
        type='input' 
        onChange={
            (e)=>setTodo(e.target.value)
        }
        placeholder='Enter a task' 
        className='input__box'
      />
      <button className='input_submit' type='submit'>Go</button>
    </form>
    )
};

// or you can write the input field like this:

// const InputFeild React.FC<Props> = ({todo, setTodo}) => {
//     return (
//       <form className='input'>
//         <input type='input' placeholder='Enter a task' className='input__box'/>
//         <button className='input_submit' type='submit'>Go</button>
//       </form>
//       )
//   };

export default InputFeild