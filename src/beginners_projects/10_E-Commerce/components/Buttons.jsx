
const Buttons = ({ onClickHandler, value, title }) => {
  return (
    <button onClick={onClickHandler} value={value} className="recommended-btn btns">
      {title}
    </button>
  )
}

export default Buttons
