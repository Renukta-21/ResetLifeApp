import { createContext, useState } from "react";

const TaskContext = createContext()
function TaskProvider({children}){
    const [toggleNewTask, setToggleNewTask] = useState(false);

    return(
        <TaskContext.Provider value={{toggleNewTask,setToggleNewTask}}> 
            {children}
        </TaskContext.Provider>
    )
}
export{
    TaskContext, TaskProvider
}
