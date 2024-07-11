import { useState, useRef, useEffect } from "react"
import checkIcon from '../assets/check.svg'
import crossIcon from '../assets/crosss.svg'
import water from '../assets/water.svg'
import gym from '../assets/gym.svg'
import wakeUp from '../assets/wakeUp.svg'


const iconMap = {
    water,
    gym,
    wakeUp,
    // Agrega más íconos aquí según sea necesario
};

function TaskCard({ icon, bg, streak, repeat, task, description, darkCard }) {
    const [firstTouch, setfirstTouch] = useState(null)
    const [offsetX, setOffsetX] = useState(-200)
    const [originalDim, setOriginalDim] = useState({ width: 0 })

    useEffect(() => {
        const container = document.getElementById('container')
        setOriginalDim({ width: container.offsetWidth })
    }, [])

    const handleSwipe = (e) => {
        console.log(e.touches[0].clientX)
        setfirstTouch(e.touches[0].clientX)
    }
    const handleMove = (e) => {
        const currentX = e.touches[0].clientX;
        const moveOffset = currentX - firstTouch;
        if (moveOffset > 60) {
            setOffsetX(0)
        } else if (moveOffset < -60) {
            setOffsetX(-200)
        }
    }
    return (
        <div className="flex w-fit"
            onTouchStart={handleSwipe}
            onTouchMove={handleMove}
            style={{
                transform: `translateX(${offsetX}px)`,
                transition: 'transform 0.3s ease'
            }}>
            <div className="w-[200px] flex flex-col items-center justify-center gap-3">
                <button className="shadow-drop bg-green-600 w-[120px] p-2 flex flex-col items-center rounded-md">
                    <img src={checkIcon} alt="" />
                    <p className="text-white">Mark as done</p>
                </button>
                <button className="shadow-drop bg-red-600 w-[120px] p-2 flex flex-col items-center rounded-md">
                    <img src={crossIcon} alt="" />
                    <p className="text-white">Mark as done</p>
                </button>
            </div>
            <div className={`bg-${bg} taskCard`} style={{ width: originalDim.width }}>
                <div className="flex">
                    <div>
                        <img src={iconMap[icon]} alt="" />
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