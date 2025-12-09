import Category from "./category/Category.jsx";
import Colors from "./colors/Colors.jsx";
import Price from "./price/Price.jsx";

import "./Sidebar.css";
const Sidebar = () => {
  return (
    <div>
      <section className="sidebar">
        <div className="logo-container">
          <h1>🛒</h1>
        </div>

        <Category /> 
        <Price />
        <Colors />
      </section>
    </div>
  )
}

export default Sidebar
