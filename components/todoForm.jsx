import { useState } from "react";

const TodoForm = ({AddList}) => {
    const [value, setValue] = useState("");
    const [category, setCategory] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(value, category)
        if (!value || !category) return;
        AddList(value, category)
        setValue("");
        setCategory("")
    };

  return (
      <div className='div-form'>
          <h2>Criar nova tarefa:</h2>
          <form onSubmit={handleSubmit}>
              <input type="text" value={value} placeholder='Digite o titulo da tarefa' onChange={(e) => setValue(e.target.value)} />
              <select value={category} onChange={(e) => setCategory(e.target.value)
                  
              }>
                  <option value='' >Selecione a categoria</option>
                  <option value='Trabalho'>Trabalho</option>
                  <option value='Pessoal'>Pessoal</option>
                  <option value='Estudos'>Estudos</option>
              </select>
              <button type="submit">Adicionar nova Tarefa</button>
          </form>
      </div>
  )
}

export default TodoForm;