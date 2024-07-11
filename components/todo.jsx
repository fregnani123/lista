import React from 'react'


const todo = ({todo}) => {
  return (
      <div className='todo'>
          <div className='content'>
              <p>Tarefa: {todo.text}</p>
              <p>Categoria: {todo.category}</p>
          </div>
          <div className='btn'>
              <button className='btn-complete'>Completar</button>
              <button className='btn-delete'>x</button>
          </div>
      </div>
  )
}

export default todo