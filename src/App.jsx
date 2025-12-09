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
import Navigation from "../src/beginners_projects/10_E-Commerce/navigation/Navigation.jsx";
import Products from "./beginners_projects/10_E-Commerce/products/Products.jsx";
import Recommended from "./beginners_projects/10_E-Commerce/recommended/Recommended.jsx";
import Sidebar from "./beginners_projects/10_E-Commerce/sidebar/Sidebar.jsx";

const App = () => {
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
      <Sidebar />
      <Navigation />
      <Recommended />
      <Products />
    </div>
  );
};

export default App;
