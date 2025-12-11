import Input from "../../components/Input";
import "./Colors.css";

const Colors = ({handleChange}) => {
  return (
    <div>
      <h2 className="sidebar-title price-title">Color</h2>
      <label className="sidebar-label-container">
        <input onChange={handleChange} type="radio" name="price" value="" />
        <span className="checkmark all"></span>All
      </label>
      <Input
        handleChange={handleChange}
        value="black"
        title="Black"
        name="Colors"
        color="black"
      />
      <Input
        handleChange={handleChange}
        value="blue"
        title="Blue"
        name="Colors"
        color="blue"
      />
      <Input
        handleChange={handleChange}
        value="red"
        title="Red"
        name="Colors"
        color="red"
      />
      <Input
        handleChange={handleChange}
        value="green"
        title="Green"
        name="Colors"
        color="green"
      />

      <label className="sidebar-label-container"> 
        <input
        type="radio"
        onChange={handleChange}
        value="white"
        name="Colors"
      />
        <span className="checkmark" style={{ background: "white", border:"2px solid black" }}></span>
        White
      </label>
      
    </div>
  );
};

export default Colors;
