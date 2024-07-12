import CompletedSumarry from './CompletedSumarry'
import CurrentDay from './CurrentDay'
import Tasks from './Tasks'

function MainUI({toggleNewTask}) {
    return (
        <div className='overflow-hidden'>
            <CompletedSumarry />
            <div className='mx-4' id='container'>
                <CurrentDay toggleNewTask={toggleNewTask}/>
                <Tasks />
            </div>
        </div>
    )
}

export default MainUI