import axios from "axios"

function CurrentDay({toggleNewTask}) {
    const handleNewTask = () => {
        toggleNewTask((prevValue)=> !prevValue)
    }
    return (
        <div>
            <div className="font-bold my-3">
                <div className="flex justify-between">
                    <h2 className="text-4xl italic">Day 21 <span className="font-normal">/</span>90</h2>
                    <button onClick={handleNewTask} className="w-10 aspect-square bg-red-400">+</button>
                </div>
                <p className="text-xl mt-2 mb-4">You are going to make it</p>
            </div>
        </div>
    )
}

export default CurrentDay