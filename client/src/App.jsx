import MainUI from "./Main UI/MainUI"
import statsIcon from './assets/statsIcon.svg'
import home from './assets/mainIcon.svg'
import dots from './assets/dotsIcon.svg'
import calendar from './assets/calendarIcon.svg'
import arrowRight from './assets/arrowRight.svg'
import arrowLeft from './assets/arrowLeft.svg'
import gym from './assets/gym.svg'
import  work from './assets/work.svg'
import leisure from './assets/leisure.svg'
import chores from './assets/chores.svg'
import study from './assets/study.svg'

import { TaskContext, TaskProvider } from './TaskContext'
import { useContext, useEffect } from "react"
import taskTypes from '../data/taskTypes.json'


const mappedICons={
  gym, work,leisure,chores, study
}
function App() {
  const { toggleNewTask, setToggleNewTask } = useContext(TaskContext)
  useEffect(() => {
    if (toggleNewTask) {
      // Deshabilitar scroll cuando se muestra el componente AddTask
      document.body.style.overflow = 'hidden';
    } else {
      // Restaurar scroll cuando se oculta el componente AddTask
      document.body.style.overflow = 'auto';
    }

    return () => {
      // Asegúrate de restaurar el scroll cuando el componente se desmonte
      document.body.style.overflow = 'auto';
    };
  }, [toggleNewTask]);
  
  const handleBack = ()=>setToggleNewTask(prevValue=> !prevValue)
  return (
    <div>
      <div className="bg-main-gray min-h-screen relative pb-20 overflow-hidden">
        {/* {toggleNewTask===true&&} */}
        <AddTask handleBack={handleBack} toggleNewTask={toggleNewTask}/>
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

function AddTask({handleBack, toggleNewTask}){
  return(
    <div className={
      ` bg-main-gray z-10 absolute transition-all ${toggleNewTask||'translate-x-full'} inset-0 p-5 py-8`
    } 
    >
      <div className="flex flex-col">
        <div className="flex flex-col">
          <button onClick={handleBack}><img src={arrowLeft} alt="" className="w-10"/></button>
          <h3 className="text-3xl w-full text-center">Add new task</h3>
        </div>
        <p className="mt-3 mb-5 bg-black w-full flex justify-center"><span className="bg-main-gray px-2 inline-block">Select task type</span></p>
      </div>
      <div>
        {taskTypes.map(task => (
          <div key={task.id} className={`flex bg-${task.icon} py-2 px-4 my-3`}>
            <img src={mappedICons[task.icon]} alt="" className="w-8 mr-4"/>
            <div className="flex items-center justify-between w-full">
              <p className="text-white">{task.type}</p>
              <img src={arrowRight} alt="" />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}