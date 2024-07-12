import axios from "axios"
import { useContext } from "react"
import { TaskContext } from "../TaskContext"
import newtask from '../assets/newTask.svg'

function CurrentDay() {
    const {setToggleNewTask} = useContext(TaskContext)
    const handleNewTask = () => {
        setToggleNewTask((prevValue)=> !prevValue)
    }
    return (
        <div>
            <div className="font-bold my-3">
                <div className="flex justify-between">
                    <h2 className="text-4xl italic">Day 21 <span className="font-normal">/</span>90</h2>
                    <button onClick={handleNewTask} className="w-8 ">
                        <img src={newtask} alt="" className=""/>
                    </button>
                </div>
                <p className="text-xl mt-2 mb-4">You are going to make it</p>
            </div>
        </div>
    )
}

export default CurrentDay