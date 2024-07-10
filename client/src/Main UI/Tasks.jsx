import { useRef } from "react"
import TaskCard from "./TaskCard"
import water from '../assets/water.svg'

function Tasks() {
  const activeButtonRef = useRef(null);

  const handleActive = (e) => {
    // Remueve la clase 'selected' del botón activo actual
    if (activeButtonRef.current) {
      activeButtonRef.current.classList.remove('selected');
    }

    e.target.classList.add('selected');
    activeButtonRef.current = e.target;
  };
  return (
    <div>
      <div className="buttons">
        <button id="1" onClick={handleActive}>To-dos <span>(3)</span></button>
        <button id="2" onClick={handleActive}>Done <span>(2)</span></button>
        <button id="3" onClick={handleActive}>Skipped <span>(0)</span></button>
      </div>
      <div>
        <TaskCard icon={water} bg='waterBG' task={'Drink 2L of water'} streak={'10 days'} repeat={'Everyday'} description={'Stad hydrateded, stay energised'}/>
        <TaskCard icon={water} bg='gymBG' streak={'2 days'} repeat={'6 days per week'}/>
        {/* <TaskCard icon={water} bg='gymBG' streak={'2 days'} repeat={'6 days per week'}/> */}
      </div>
    </div>
  )
}

export default Tasks