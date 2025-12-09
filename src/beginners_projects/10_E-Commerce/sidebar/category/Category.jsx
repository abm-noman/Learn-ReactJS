import './Category.css'
const Category = () => {
  return (
    <div>
      <h2 className="sidebar-title">Category</h2> 
      <div>
        <label className="sidebar-label-container">
          <input type="radio" name='text' />
          <span className="checkmark"></span>All
        </label>
        </div>
    </div>
  )
}

export default Category
