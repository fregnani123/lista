import { useState } from 'react';
import Todo from '../components/todo'
import TodoForm from '../components/todoForm';
import '../style/app.css';
import todo from '../components/todo';


function App() {

  const [todos, settodos] = useState([]);


  const AddList = (text, category) => {
    
    const newTodo = [...todos, {
      id: Math.floor(Math.random() * 10000),
      text,
      category,
      isCompleted: false,
    }];
    settodos(newTodo);
  }

  const Listcompleted = (id) => {
    const updateTodos = todos.map(todo => todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo);
    settodos(updateTodos);
  }

  return (
    <div className='app'>
      <h1>Lista de Tarefas</h1>
      <div className='toda-Lista'>
        {todos.map(todo => (
          <Todo key={todo.id} todo={todo} Listcompleted={() => Listcompleted(todo.id)} />
        ))}</div>
      <TodoForm AddList={AddList} Listcompleted={Listcompleted}/>
    </div>
  )
}

export default App
