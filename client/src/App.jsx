import MainUI from "./Main UI/MainUI"
import Calendar from "./CalendarUI/Calendar"
import Stats from './StatsUI/Stats'
import { HomeIcon, CalendarIcon, StatsIcon, DotsIcon } from './Main UI/icons/Icons'
import dots from './assets/dotsIcon.svg'
import arrowRight from './assets/arrowRight.svg'
import arrowLeft from './assets/arrowLeft.svg'
import gym from './assets/gym.svg'
import work from './assets/work.svg'
import leisure from './assets/leisure.svg'
import chores from './assets/chores.svg'
import study from './assets/study.svg'
import health from './assets/health.svg'

import { TaskContext } from './TaskContext'
import { useContext, useEffect, useRef, useState } from "react"
import taskTypes from '../data/taskTypes.json'
import axios from "axios"


const mappedICons = {
  gym, work, leisure, chores, study, health
}


function App() {
  const [activeNewTask, setActiveNewTask] = useState(null)
  const { toggleNewTask, setToggleNewTask, tasks } = useContext(TaskContext)
  const [activeIcon, setActiveIcon] = useState(1);
  const activeIconColor = 'rgb(40, 45, 47)'
  const taskDiv = useRef()
  let activeComponent

  useEffect(() => {
    if (toggleNewTask) {
      const mainPage = document.getElementById('mainPage')
      mainPage.style.height = `${taskDiv.current.clientHeight}px`
      mainPage.style.overflow = 'hidden'
      console.log('si')
    }

    return () => {
      mainPage.style.height = 'auto'
      mainPage.style.overflow = 'auto'
    }
  }, [toggleNewTask, activeNewTask, tasks]);

  const componentToMount = () => {
    switch (activeIcon) {
      case 1:
        return <MainUI />
        break
      case 2:
        return <Stats />
        break
      case 3:
        return <Calendar />
        break
    }
  }

  const handleBack = () => setToggleNewTask(prevValue =>
    !prevValue)
  const handleIconClick = (id) => {
    setActiveIcon(id);
  }
  return (
    <div id="mainPage">
      <div className=" min-h-screen relative pb-20 overflow-hidden">
        {/* {toggleNewTask===true&&} */}
        <AddTask handleBack={handleBack} toggleNewTask={toggleNewTask} taskDiv={taskDiv} activeNewTask={activeNewTask} setActiveNewTask={setActiveNewTask} />

        {componentToMount()}
        <div className="navBar">
          <button id="icon1" onClick={() => handleIconClick(1)}>
            <HomeIcon color={activeIcon === 1 ? 'rgb(40, 45, 47)' : 'rgb(174, 164, 161)'} />
          </button>
          <button id="icon2" onClick={() => handleIconClick(2)}>
            <StatsIcon color={activeIcon === 2 ? 'rgb(40, 45, 47)' : 'rgb(174, 164, 161)'} />
          </button>
          <button id="icon3" onClick={() => handleIconClick(3)}>
            <CalendarIcon color={activeIcon === 3 ? 'rgb(40, 45, 47)' : 'rgb(174, 164, 161)'} />
          </button>
          <button id="icon4" onClick={() => handleIconClick(4)}>
            <DotsIcon color={activeIcon === 4 ? 'rgb(40, 45, 47)' : 'rgb(174, 164, 161)'} />
          </button>
        </div>
      </div>
    </div>
  )
}
export default App

function AddTask({ handleBack, toggleNewTask, taskDiv, activeNewTask, setActiveNewTask }) {
  const { tasks, setTasks} = useContext(TaskContext)
  const [newTask, setNewTask] = useState({
    taskName: null,
    description: null
  })
  const wipeFields = () => {
    newTask.taskName = ''
    newTask.description = ''
  }
  const handleClick = (id) => {
    wipeFields()
    setActiveNewTask(id)
  }
  const handleChange = (e) => {
    console.log(e.target.id)
    const { id, value } = e.target;
    setNewTask(prevTask => ({
      ...prevTask,
      [id]: value
    }))
  }
  let taskData
  const handleNewTask = (e) => {
    e.preventDefault()
    switch (activeNewTask) {
      case 1:
        taskData = {
          id: 1,
          type: "chores",
          task: newTask.taskName,
          streak: 5,
          repeat: "Everyday",
          icon: "water",
          'bg-imageID': "waterBG",
          description: newTask.description
        }
        break
      case 2:
        taskData = {
          id: 2,
          type: "gym",
          task: newTask.taskName,
          streak: 5,
          repeat: "5 days per week",
          icon: "gym",
          'bg-imageID': "gymBG",
          description: newTask.description
        }
        break
      case 3:
        taskData = {
          id: 3,
          type: "study",
          task: newTask.taskName,
          streak: 5,
          repeat: "5 days per week",
          icon: "study",
          'bg-imageID': "studyBG",
          description: newTask.description
        }
        break
      case 4:
        taskData = {
          id: 4,
          type: "leisure",
          task: newTask.taskName,
          streak: 5,
          repeat: "5 days per week",
          icon: "leisure",
          'bg-imageID': "leisureBG",
          description: newTask.description
        }
        break
      case 5:
        taskData = {
          id: 5,
          type: "work",
          task: newTask.taskName,
          streak: 5,
          repeat: "5 days per week",
          icon: "work",
          'bg-imageID': "workBG",
          description: newTask.description
        }
        break
      case 6:
        taskData = {
          id: 6,
          type: "health",
          task: "health",
          streak: 5,
          repeat: "5 days per week",
          icon: "health",
          'bg-imageID': "healthBG",
          description: "Keep up health, long life"
        }
      // Agrega más casos si es necesario
      default:
        return
    }

    axios.post(`http://localhost:3000/todos`, taskData)
      .then(res => {
        console.log(res.data)
        setTasks(prevTasks => {
          return ({
            ...prevTasks,
            todos: prevTasks.todos.concat(res.data)
          })
        })
      })

  }
  return (
    <div className={
      ` bg-main-gray z-10 absolute transition-all ${toggleNewTask || 'translate-x-full'} inset-x-0 min-h-screen p-5 pt-8 pb-20 overflow-y-auto`
    }
      ref={taskDiv}
    >
      <div className="flex flex-col">
        <div className="flex flex-col">
          <button onClick={handleBack}><img src={arrowLeft} alt="" className="w-10" /></button>
          <h3 className="text-3xl w-full text-center">Add new task</h3>
        </div>
        <p className="mt-3 mb-5 bg-black w-full flex justify-center"><span className="bg-main-gray px-2 inline-block">Select task type</span></p>
      </div>
      <div>
        {taskTypes.map(task => (
          <div key={task.id} >
            <button className={`flex bg-${task.type} items-center w-full py-2 px-4 my-3`}
              onClick={() => handleClick(task.id)}>
              <img src={mappedICons[task.type]} alt="" className="w-8 mr-4" />
              <div className="flex items-center justify-between w-full ">
                <p className="text-white">{task.type}</p>
                <img src={arrowRight} alt="" />
              </div>
            </button>
            {activeNewTask === task.id && (
              <div className="bg-white px-2 py-3 transition-all ease-out duration-500 max-h-[500px] overflow-hidden">
                <form
                  onSubmit={handleNewTask} className="flex flex-col justify-center ">
                  <div className="flex flex-col">
                    <label htmlFor="taskName" className="text-center">Task Name</label>
                    <input type="text" id="taskName" className="border border-main-gray rounded-md my-2" onChange={handleChange} value={newTask.taskName} />
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="description" className="text-center">Description</label>
                    <input type="text" id="description" className="border border-main-gray rounded-md my-2" value={newTask.description} onChange={handleChange} />
                  </div>
                  <button type="submit"
                    className={`bg-main-gray max-w-fit px-8 py-2 self-center hover:bg-gray-400 my-2`}>
                    Add Task</button>
                </form>
              </div>
            )}
          </div>
        ))}

      </div>
    </div>
  )
}
