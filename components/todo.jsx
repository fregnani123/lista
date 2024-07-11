import React from 'react'


const todo = ({todo, Listcompleted}) => {
  return (
      <div className='todo'>
          <div className='content'>
              <p className={todo.isCompleted ? 'completed' : 'complete'}>Tarefa: {todo.text}</p>
              <p>Categoria: {todo.category}</p>
              <p>concluida: {todo.isCompleted == true ?'Sim': 'Nâo'}</p>
          </div>
          <div className='btn'>
              <button onClick={Listcompleted} className={todo.isCompleted ? 'btn-completed' : 'btn-complete'}>{todo.isCompleted ? 'Concluido' : 'Completar'}</button>
              <button className='btn-delete'>x</button>
          </div>
      </div>
  )
}

export default todo