import { useState } from 'react';
import Todo from '../components/todo'
import TodoForm from '../components/todoForm';
import '../style/app.css';


function App() {

  const [todos, settodos] = useState([]);

  const AddList = (text, category) => {
    
    const newTodo = [...todos, {
      id: Math.floor(Math.random() * 10000),
      text,
      category, isCompleted: false,
    
    }];
    settodos(newTodo);
  }

  return (
    <div className='app'>
      <h1>Lista de Tarefas</h1>
      <div className='toda-Lista'>
        {todos.map(todo => (
          <Todo key={todo.id} todo={todo} />
        ))}</div>
      <TodoForm AddList={AddList} />
    </div>
  )
}

export default App
