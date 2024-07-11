import star from '../assets/star.svg'

function CompletedSumarry() {
  return (
    <div>
      <div className='summary-wrapper'>
        <ul className="summary">
          <li>40km ran <img src={star} alt="" /></li>
          <li>13 cold showers taken <img src={star} alt="" /></li>
          <li>21 study hours <img src={star} alt="" /></li>
        </ul>
        <ul className="summary">
          <li>40km ran <img src={star} alt="" /></li>
          <li>13 cold showers taken <img src={star} alt="" /></li>
          <li>21 study hours <img src={star} alt="" /></li>
        </ul>
      </div>
    </div>
  )
}

export default CompletedSumarry