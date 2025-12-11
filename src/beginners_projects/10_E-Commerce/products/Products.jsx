// import { AiFillStar } from "react-icons/ai"
// import { BsFillBagPlusFill } from "react-icons/bs"
import "./Products.css";
const Products = ({result}) => {
  return (
    <div>
      <section className="card-container">
        {result}
      </section>
    </div>
  );
};

export default Products;
