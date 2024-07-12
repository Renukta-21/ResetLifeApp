import { useEffect, useState, useRef } from "react"
import TaskCard from "./TaskCard"
import axios from "axios";


function Tasks() {
  const [tasks, setTasks] = useState({ todos: null, completed: null })
  const [activeTab, setActiveTab] = useState('todos'); 

  const activeButtonRef = useRef(null);
  useEffect(() => {
    activeButtonRef.current = document.getElementById('1')
    activeButtonRef.current.classList.add('selected')

    async function fetchData(){
      const [todos, completed] = await Promise.all([
        axios.get('http://localhost:3000/todos'),
        axios.get('http://localhost:3000/completed')
      ])
      const data1 = await todos.data
      const data2 = await completed.data
      setTasks({todos:data1, completed:data2})
    }
    fetchData()

  }, [])

  const handleActive = (e, tab) => {
    // Remueve la clase 'selected' del botón activo actual
    if (activeButtonRef.current) {
      activeButtonRef.current.classList.remove('selected');
    }

    e.target.classList.add('selected');
    activeButtonRef.current = e.target;
    setActiveTab(tab)
  };
  return (
    <div>
      <div className="buttons">
        <button id="1" onClick={(e)=> handleActive(e,'todos')}>To-dos <span>(3)</span></button>
        <button id="2" onClick={(e)=> handleActive(e,'completed')}>Done <span>(2)</span></button>
        <button id="3" onClick={(e)=> handleActive(e,'skipped')}>Skipped <span>(0)</span></button>
      </div>
      <div>
        {activeTab==='todos' && tasks.todos &&
          tasks.todos.map(task => {
            return (
              <TaskCard
              key={task.id}
              icon={task.icon}
              bg={task["bg-imageID"]}
              streak={task.streak}
              repeat={task.repeat}
              task={task.task}
              description={task.description}
              darkCard={true}
              />
            )
          })
        }
        {activeTab==='completed' && tasks.completed &&
          tasks.completed.map(task=>{
            return(
              <TaskCard
              key={task.id}
              icon={task.icon}
              bg={task["bg-imageID"]}
              streak={task.streak}
              repeat={task.repeat}
              task={task.task}
              description={task.description}
              darkCard={true}
              />
            )
          })}
      </div>
    </div>
  )
}

export default Tasks