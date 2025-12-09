import "./Recommended.css"
const Recommended = () => {
  return (
    <div>
      <h2 className="recommended-title" >Recommended</h2>
      <div className="recommended-flex">
        <button className="recommended-btn active-recommended-btn btns">All</button>
        <button className="recommended-btn btns">Nike</button>
        <button className="recommended-btn btns">Adidas</button>
        <button className="recommended-btn btns">Puma</button>
        <button className="recommended-btn btns">Vans</button>

      </div>
    </div>
  )
}

export default Recommended
