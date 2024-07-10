function TaskCard({icon, bg, streak, repeat, task, description}) {
    return (
        <div className={`bg-${bg} taskCard`}>
        <div className="flex">
            <div>
                <img src={icon} alt="" />
            </div>
            <div className="brightness-10">
                <h4 className="text-white font-bold text-2xl text">{task}</h4>
                <p>{description}</p>
            </div>
        </div>
        <div>
            <ul>
                <li><span>Streak:</span> {streak}</li>
                <li><span>Repeat:</span> {repeat}</li>
                <li><span>Difficulty:</span> ooo</li>
            </ul>
        </div>
    </div>
  )
}

export default TaskCard