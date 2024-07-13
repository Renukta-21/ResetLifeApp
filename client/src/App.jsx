import MainUI from "./Main UI/MainUI"
import statsIcon from './assets/statsIcon.svg'
import home from './assets/mainIcon.svg'
import dots from './assets/dotsIcon.svg'
import calendar from './assets/calendarIcon.svg'
import arrowRight from './assets/arrowRight.svg'
import arrowLeft from './assets/arrowLeft.svg'
import gym from './assets/gym.svg'
import work from './assets/work.svg'
import leisure from './assets/leisure.svg'
import chores from './assets/chores.svg'
import study from './assets/study.svg'

import { TaskContext, TaskProvider } from './TaskContext'
import { useContext, useEffect, useRef, useState } from "react"
import taskTypes from '../data/taskTypes.json'


const mappedICons = {
  gym, work, leisure, chores, study
}


function App() {
  const [activeNewTask, setActiveNewTask] = useState(null)
  const { toggleNewTask, setToggleNewTask } = useContext(TaskContext)
  const taskDiv = useRef()

  useEffect(() => {
    if(toggleNewTask){
      const mainPage = document.getElementById('mainPage')
      mainPage.style.height = `${taskDiv.current.clientHeight}px`
      mainPage.style.overflow='hidden'
      console.log('si')
    }
    return ()=>{
      mainPage.style.height = 'auto' 
      mainPage.style.overflow='auto'
    }
  }, [toggleNewTask, activeNewTask]);

  const handleBack = () => setToggleNewTask(prevValue =>
    !prevValue)
  return (
    <div id="mainPage">
      <div className=" min-h-screen relative pb-20 overflow-hidden">
        {/* {toggleNewTask===true&&} */}
        <AddTask handleBack={handleBack} toggleNewTask={toggleNewTask} taskDiv={taskDiv} activeNewTask={activeNewTask} setActiveNewTask={setActiveNewTask}/>
        <MainUI />
        <div className="navBar">
          <button><img src={home} alt="" /></button>
          <button><img src={statsIcon} alt="" /></button>
          <button><img src={calendar} alt="" /></button>
          <button><img src={dots} alt="" /></button>
        </div>
      </div>
    </div>
  )
}
export default App

function AddTask({ handleBack, toggleNewTask, taskDiv, activeNewTask,setActiveNewTask }) {
  const [newTask, setNewTask] = useState({
    taskName: null,
    description: null
  })

  const handleClick = (id) => {
    setActiveNewTask(id)
  }
  const handleNewTask = (e)=>{
    e.preventDefault()

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
          <div key={task.id}>
            <button className={`flex bg-${task.type} w-full py-2 px-4 my-3`}
              onClick={() => handleClick(task.id)}>
              <img src={mappedICons[task.type]} alt="" className="w-8 mr-4" />
              <div className="flex items-center justify-between w-full">
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
                    <input type="text" id="taskName" className="border border-main-gray rounded-md my-2" />
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="taskDesc" className="text-center">Description</label>
                    <input type="text" id="taskDesc" className="border border-main-gray rounded-md my-2" />
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
