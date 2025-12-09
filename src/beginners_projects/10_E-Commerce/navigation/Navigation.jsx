import { AiOutlineShoppingCart, AiOutlineUserAdd } from "react-icons/ai";
import { FiHeart } from "react-icons/fi";
import "./Navigation.css";

const Navigation = () => {
  return (
    <nav>
      <div className="nav-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search for Shoes"
        />
      </div>

      <div className="profile-container">
        <a href="#">
          <FiHeart className="nav-icons" />
        </a>
        <a href="#">
          <AiOutlineShoppingCart className="nav-icons" />
        </a>

        <a href="#">
          <AiOutlineUserAdd className="nav-icons" />
        </a>
      </div>
    </nav>
  );
};

export default Navigation;
