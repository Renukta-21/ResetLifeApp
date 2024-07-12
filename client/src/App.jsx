import MainUI from "./Main UI/MainUI"
import statsIcon from './assets/statsIcon.svg'
import home from './assets/mainIcon.svg'
import dots from './assets/dotsIcon.svg'
import calendar from './assets/calendarIcon.svg'
import { useState } from "react"

function App() {
  const [toggleNewTask, setToggleNewTask] = useState(false)

  return (
    <div>
      {toggleNewTask===true&&
      <div className="">Add new task</div>}
      
      <div className="bg-main-gray min-h-screen relative pb-20">
      <MainUI toggleNewTask={setToggleNewTask}/>
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