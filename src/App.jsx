import React from 'react'
import ToDo from './components/ToDo'
import { ToDoItems } from './components/ToDoItems'

const App = () => {
  return (
    <div className='bg-purple-300 grid py-4 min-h-screen'>
      <ToDo/>
    </div>
  )
}

export default App