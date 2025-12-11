import Input from "../../components/Input";
import "./Price.css";

const Price = ({ handleChange }) => {
  return (
    <div className="ml">
      <h2 className="sidebar-title price-title">Price</h2>
      <label className="sidebar-label-container">
        <input onChange={handleChange} type="radio" name="price" value="" />
        <span className="checkmark"></span>All
      </label>

      <Input
        handleChange={handleChange}
        value={50}
        title="$0-$50"
        name="price"
      />
      <Input
        handleChange={handleChange}
        value={100}
        title="$51-$100"
        name="price"
      />
      <Input
        handleChange={handleChange}
        value={200}
        title="$100-$200"
        name="price"
      />
      <Input
        handleChange={handleChange}
        value={250}
        title="$201+"
        name="price"
      />
    </div>
  );
};

export default Price;
