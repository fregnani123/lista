import { useState } from 'react';
import '../style/app.css';

function App() {

  const [todo, settodos] = useState([{
    id: 1,
    text: 'Criar funcionalidade x no sistema',
    category: 'Trabalho',
    isCompleted: false,
  },
  {
    id: 2,
    text: 'Ir para academia',
    category: 'pessoal',
    isCompleted: false,
  },
  {
    id: 3,
    text: 'Estudar React',
    category: 'Estudos',
    isCompleted: false,
  }
  ]);


  return (
    <div className='app'>
      <h1>Lista de Tarefas</h1>
      <div className='toda-Lista'>{todo.map(todo => (
        <div>
          <p>Tarefa: {todo.text}</p>
          <p>Categoria: {todo.category}</p>
          
       </div>
    ))}</div>
    </div>
  )
}

export default App
