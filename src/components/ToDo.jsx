import React, { useEffect, useRef, useState } from 'react'
import { ToDoItems } from './ToDoItems'

const ToDo = () => {
    const [todoList, setTodoList] = useState(localStorage.getItem("todos")?
    JSON.parse(localStorage.getItem("todos")) : []);

    const inputRef = useRef();

    const add = () => {
        const inputText = inputRef.current.value.trim();
        if(inputText === ""){
            return null;
        }
        const newTodo = {
            id: Date.now(),
            text: inputText,
            isDone: false,
          }
        setTodoList((prev)=> [...prev, newTodo]);
        inputRef.current.value="";
    }

    const deleteTodo = (id) =>{
        setTodoList((prevTodos)=>{
            return prevTodos.filter((todo) => todo.id !== id)
        })
    }

    const toggle = (id) =>{
        setTodoList((prevTodos)=>{
            return prevTodos.map((todo)=>{
                if(todo.id === id){
                    return {...todo, isDone: !todo.isDone}
                }
                return todo;
            })
        })
    }

    useEffect(()=>{
        localStorage.setItem("todos", JSON.stringify(todoList))
    },[todoList])

    const [inputText,setInputText] = useState('')
            const handleEnterPress = (e)=>{
              if(e.keyCode===13){
                add(inputText)
                setInputText("")
              }
            }

  return (
    <div className='bg-white place-self-center w-11/12 max-w-md flex-col p-7 min-h-[550px] rounded-xl'>

        <div className='flex items-center justify-center mt-7 gap-2'>
            <span><i class="fa-solid fa-list-ul fa-xl text-purple-600"></i></span>
            <h1 className='text-3xl font-bold text-black flex'>TO-DO LIST</h1>
        </div>

        <div className='flex items-center my-7 bg-gray-200 rounded-full'>
        <input ref={inputRef} className='bg-transparent outline-none h-14 border-0 flex-1 pl-6 pr-2 placeholder:text-slate-600' type="text" placeholder="Add your task" onKeyDown={handleEnterPress}/>
        <button className='border-none rounded-full bg-purple-600 text-white w-32 h-14 text-l font-medium cursor-pointer' onClick={add} >ADD +</button>
        </div>

        <div>
        {todoList.map((item,index)=>{
            return <ToDoItems key={index} text={item.text} id={item.id} isDone={item.isDone} deleteTodo={deleteTodo} toggle={toggle} add={add}/>
        })}
           
        </div>

    </div>
  
  )
}

export default ToDo