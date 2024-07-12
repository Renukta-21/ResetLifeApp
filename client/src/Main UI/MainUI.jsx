import CompletedSumarry from './CompletedSumarry'
import CurrentDay from './CurrentDay'
import Tasks from './Tasks'

function MainUI() {
    return (
        <div className='overflow-hidden'>
            <CompletedSumarry />
            <div className='mx-4' id='container'>
                <CurrentDay />
                <Tasks />
            </div>
        </div>
    )
}

export default MainUI