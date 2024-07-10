import CompletedSumarry from './CompletedSumarry'
import CurrentDay from './CurrentDay'
import Tasks from './Tasks'

function MainUI() {
    return (
        <div>
            <CompletedSumarry />
            <div className='mx-4'>
                <CurrentDay />
                <Tasks />
            </div>
        </div>
    )
}

export default MainUI