import React, {useRef} from 'react';
import './styles.css';

interface Props{
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    handleAdd:(e: React.FormEvent)=> void;
}

const InputFeild = ({todo, setTodo, handleAdd}: Props) => {
  // useRef is like using document.getElmentby ID or ClassName
  const inputRef = React.useRef() as React.MutableRefObject<HTMLInputElement>;


  return (
    <form className='input' onSubmit={(e) => {
        handleAdd(e);
        // the ? means its not sure if there will be a value or not added inside of the useRef
        inputRef.current?.blur();
      }}>
      <input 
        ref={inputRef}
        value={todo} 
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