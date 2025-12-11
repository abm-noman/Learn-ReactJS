// import Counter from "./beginners_projects/01_Counter/Counter.jsx";
// import ToDo from "./beginners_projects/02_ToDoList/ToDo.jsx";
// import Meals from "./beginners_projects/03_MealsApp/Meals.jsx";
// import Calculator from "./beginners_projects/04_Calculator/Calculator.jsx";
// import ToggleBackgroundColor from "./beginners_projects/05_ToggleBackgroundColor/ToggleBackgroundColor.jsx";
// import HiddenSearchBar from "./beginners_projects/06_HiddenSearchBar/HiddenSearchBar.jsx";
// import Testimonials from "./beginners_projects/07_Testimonials/Testimonials.jsx";
// import Accordion from "./beginners_projects/08_Accordions/Accordion.jsx";
// import { accordionData } from "./beginners_projects/08_Accordions/utilities/content.js";
// import Form from "./beginners_projects/09_Form_Validation/Form.jsx";

//Ecommerce Project
import { useState } from "react";
import Navigation from "../src/beginners_projects/10_E-Commerce/navigation/Navigation.jsx";
import Products from "./beginners_projects/10_E-Commerce/products/Products.jsx";
import Recommended from "./beginners_projects/10_E-Commerce/recommended/Recommended.jsx";
import Sidebar from "./beginners_projects/10_E-Commerce/sidebar/Sidebar.jsx";

// Database
import Card from "./beginners_projects/10_E-Commerce/components/Card.jsx";
import products from "./beginners_projects/10_E-Commerce/db/data.js";

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [query, setQuery] = useState("");

  //-------------Input Filter -------------
  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const filteredItems = products.filter((product) =>
    product.title.toLowerCase().indexOf(query.toLowerCase())!== -1
  );

  //-------------Radio Filter -------------
  const handleChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  //-------------Buttons Filter -------------
  const handleClick = (e) => {
    setSelectedCategory(e.target.value);
  };

  function filteredData(products, selected, query) {
    let filteredProducts = products;

    // filtering input item
    if (query) {
      filteredProducts = filteredItems;
    }
    // Selected Filter
    if (selected) {
      filteredProducts = filteredProducts.filter(
        ({ category, color, company, newPrice, title }) =>
          category === selected ||
          color === selected ||
          company === selected ||
          newPrice === selected ||
          title === selected
      );
    }
    return filteredProducts.map(({ img, title, star, reviews, prevPrice, newPrice }, index) => ( <Card key={index} img={img} title={title} star={star} reviews={reviews} prevPrice={prevPrice} newPrice={newPrice} /> ));
  }

  const result = filteredData(products, selectedCategory, query);

  return (
    <div>
      {/* <Counter /> */}
      {/* <ToDo /> */}
      {/* <Meals /> */}
      {/* <Calculator /> */}
      {/* <ToggleBackgroundColor /> */}
      {/* <HiddenSearchBar /> */}
      {/* <Testimonials /> */}

      {/* <div className="accordion">
        {accordionData.map(({ title, content }) => (
          <Accordion title={title} content={content} />
        ))}
      </div> */}

      {/* <Form /> */}

      {/* Ecommerce Project */}
      <Sidebar handleChange={handleChange} />
      <Navigation hand />
      <Recommended />
      <Products products={result} />
    </div>
  );
};

export default App;
