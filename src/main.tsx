import React from 'react'
import ReactDOM from 'react-dom/client'
import './style.css' 
import { TodoApp } from './components/TodoApp'
import { Tarea } from './components/Tarea'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>

    <TodoApp></TodoApp>
    <Tarea key={1} tarea='Tarea de prueba' borrarTarea={() => console.log('borrar();')}></Tarea>

  </React.StrictMode>,
)
