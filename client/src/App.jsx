import MainUI from "./Main UI/MainUI"
import statsIcon from './assets/statsIcon.svg'
import home from './assets/mainIcon.svg'
import dots from './assets/dotsIcon.svg'
import calendar from './assets/calendarIcon.svg'

function App() {
  return (
    <div className="bg-main-gray min-h-screen relative pb-20">
      <MainUI />
      <div className="navBar">
        <button><img src={home} alt="" /></button>
        <button><img src={statsIcon} alt="" /></button>
        <button><img src={calendar} alt="" /></button>
        <button><img src={dots} alt="" /></button>
      </div>
    </div>
  )
}
export default App