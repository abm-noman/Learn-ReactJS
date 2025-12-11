import Category from "./category/Category.jsx";
import Colors from "./colors/Colors.jsx";
import Price from "./price/Price.jsx";
import "./Sidebar.css";

const Sidebar = ({handleChange}) => {
  return (
    <div>
      <section className="sidebar">
        <div className="logo-container">
          <h1>🛒</h1>
        </div>

        <Category handleChange={handleChange} />
        <Price handleChange={handleChange} />
        <Colors handleChange={handleChange} />
      </section>
    </div>
  );
};

export default Sidebar;
