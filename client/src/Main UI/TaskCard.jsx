import { useState, useRef, useEffect } from "react"
import checkIcon from '../assets/check.svg'
import crossIcon from '../assets/crosss.svg'

function TaskCard({ icon, bg, streak, repeat, task, description, darkCard }) {
    const [firstTouch, setfirstTouch] = useState(null)
    const [dragX, setDragX] = useState(0)
    const [offsetX, setoffsetX] = useState(0)
    const [originalDim, setOriginalDim] = useState({ width: 0})

    useEffect(()=>{
        const container = document.getElementById('container')
        setOriginalDim({width:container.offsetWidth})
    },[])

    const handleSwipe = (e) => {
        setfirstTouch(e.touches[0].clientX)
    }
    const handleMove = (e) => {
        setDragX(e.touches[0].clientX)
        setoffsetX(dragX - firstTouch)
    }
    const handleEnd = (e) => {

    }
    return (
        <div className="bg-red-300 flex w-fit"
            onTouchStart={handleSwipe}
            onTouchMove={handleMove}
            onTouchEnd={handleEnd}
            style={{ transform: `translateX(${-200}px)` }}>
            <div className="w-[200px] bg-gray-400 flex flex-col items-center justify-center">
                <button className="shadow-drop bg-green-600 w-[120px] p-2 flex flex-col items-center rounded-md">
                    <img src={checkIcon} alt="" />
                    <p className="text-white">Mark as done</p>
                </button>
                <button className="shadow-drop bg-red-600 w-[120px] p-2 flex flex-col items-center rounded-md">
                    <img src={crossIcon} alt="" />
                    <p className="text-white">Mark as done</p>
                </button>
            </div>
            <div className={`bg-${bg} taskCard`} style={{width:originalDim.width}}>
                <div className="flex">
                    <div>
                        <img src={icon} alt="" />
                    </div>
                    <div className="brightness-10">
                        <h4 className="text-white font-bold text-2xl text">{task}</h4>
                        <p className={`description ${darkCard && 'text-white'}`}>{description}</p>
                    </div>
                </div>
                <div>
                    <ul className="details">
                        <li className={darkCard && 'text-white'}><span >Streak:</span> {streak}</li>
                        <li className={darkCard && 'text-white'}><span >Repeat:</span> {repeat}</li>
                        <li className={darkCard && 'text-white'}><span >Difficulty:</span> ooo</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default TaskCard