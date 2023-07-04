import { useState } from 'react'
import './App.css'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import DoneIcon from '@mui/icons-material/Done';
import Alert from '@mui/material/Alert';

function App() {
  const [tasks, setTasks] = useState([])
  const [newTask, setNewTask] = useState('')

  const handleInputChange = (event) => {
    setNewTask(event.target.value)
  }

  const handleAddTask = () => {
    if (newTask === '') {
      alert('Digite uma tarefa')
      return
    }

    setTasks([...tasks, newTask])
    setNewTask('')
  }

  const handleDeleteTask = (index) => {
    const updatedTasks = [...tasks]
    updatedTasks.splice(index, 1)
    setTasks(updatedTasks)
  }

  const handleDoneTask = (index) => {
    const updatedTasks = [...tasks]
    updatedTasks.splice(index, 1)
    setTasks(updatedTasks)
  }

  return (
    <>
      <div className="title">
        <h1>Lista de tarefas</h1>
      </div>

      <div className="task-input">
        <input type="text" placeholder="Digite uma tarefa" value={newTask} onChange={handleInputChange} />
        <button onClick={handleAddTask}>Adicionar</button>
      </div>

      <div className="task-list">
        <ul>
          {tasks.map((task, index) => (
            <li key={index}>
              {task}
              <div className="buttons">
                <button onClick={() => handleDoneTask(index)} className='done-button'><DoneIcon /></button>
                <button onClick={() => handleDeleteTask(index)} className='delete-button'><DeleteForeverIcon /></button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default App
