//Ecommerce Project
import { useState } from "react";
import Card from "./beginners_projects/10_E-Commerce/components/Card.jsx";
import Navigation from "./beginners_projects/10_E-Commerce/navigation/Navigation.jsx";
import Products from "./beginners_projects/10_E-Commerce/products/Products.jsx";
import Recommended from "./beginners_projects/10_E-Commerce/recommended/Recommended.jsx";
import Sidebar from "./beginners_projects/10_E-Commerce/sidebar/Sidebar.jsx";
import "./index.css";
// Database
import products from "./beginners_projects/10_E-Commerce/db/data.js";

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [query, setQuery] = useState("");

  //-------------Input Filter -------------
  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const filteredItems = products.filter(
    (product) => product.title.toLowerCase().indexOf(query.toLowerCase()) !== -1
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
    return filteredProducts.map(
      ({ img, title, star, reviews, prevPrice, newPrice }, index) => (
        <Card
          key={index}
          img={img}
          title={title}
          star={star}
          reviews={reviews}
          prevPrice={prevPrice}
          newPrice={newPrice}
        />
      )
    );
  }

  const result = filteredData(products, selectedCategory, query);

  return (
    <div>
      {/* Ecommerce Project */}
      <Sidebar handleChange={handleChange} />
      <Navigation query={query} handleInputChange={handleInputChange} />
      <Recommended handleClick={handleClick} />
      <Products result={result} />
    </div>
  );
};

export default App;
