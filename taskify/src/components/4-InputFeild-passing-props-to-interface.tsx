import React from 'react';
import './styles.css';

interface Props{
    todo: string | number;
    setTodo: React.Dispatch<React.SetStateAction<string | number>>;
}

const InputFeild = ({todo, setTodo}: Props) => {
  return (
    <form className='input'>
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