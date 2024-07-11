import { useEffect, useState, useRef } from "react"
import TaskCard from "./TaskCard"


function Tasks() {
  const [tasks, setTasks] = useState({ todos: null, completed: null })

  const activeButtonRef = useRef(null);
  useEffect(() => {
    activeButtonRef.current = document.getElementById('1')
    activeButtonRef.current.classList.add('selected')

    fetch('http://localhost:3000/todos')
      .then(res => res.json())
      .then(data => {
        setTasks({ todos: data })
      })
  }, [])

  const handleActive = (e) => {
    // Remueve la clase 'selected' del botón activo actual
    if (activeButtonRef.current) {
      activeButtonRef.current.classList.remove('selected');
    }

    e.target.classList.add('selected');
    activeButtonRef.current = e.target;
  };
  return (
    <div>
      <div className="buttons">
        <button id="1" onClick={handleActive}>To-dos <span>(3)</span></button>
        <button id="2" onClick={handleActive}>Done <span>(2)</span></button>
        <button id="3" onClick={handleActive}>Skipped <span>(0)</span></button>
      </div>
      <div>
        {tasks.todos &&
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
      </div>
    </div>
  )
}

export default Tasks