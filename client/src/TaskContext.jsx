import { createContext, useState } from "react";

const TaskContext = createContext()
function TaskProvider({children}){
    const [toggleNewTask, setToggleNewTask] = useState(false);
    const [tasks, setTasks] = useState({ todos: null, completed: null })

    return(
        <TaskContext.Provider value={{toggleNewTask,setToggleNewTask, tasks, setTasks}}> 
            {children}
        </TaskContext.Provider>
    )
}
export{
    TaskContext, TaskProvider
}
