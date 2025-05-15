import React from 'react'

export const ToDoItems = ({text, id, isDone, deleteTodo, toggle}) => {
  return (
    <div onClick ={()=>{
        toggle(id)
    }} className='flex items-center my-3 gap-2'>
        <div className='flex flex-1 items-center cursor-pointer'>
            <i className={`${isDone ? 'fa-solid fa-circle-check' : 'fa-regular fa-circle'} text-purple-600 fa-xl`}></i>
           <p className={`${isDone ? "line-through":""} text-slate-600 ml-4 text-[17px] decoration-purple-600`}>{text}</p>
        </div>
        <i onClick={()=>{deleteTodo(id)}} class="fa-solid fa-minus fa-xl text-purple-400 hover:text-red-500 cursor-pointer"></i>

    </div>
  )
}
