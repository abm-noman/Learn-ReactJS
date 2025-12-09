import Accordion from "./beginners_projects/08_Accordions/Accordion.jsx";
import { accordionData } from "./beginners_projects/08_Accordions/utilities/content.js";
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

      <div className="accordion">
        {accordionData.map(({ title, content }) => (
          <Accordion title={title} content={content} />
        ))}
      </div>
    </div>
  );
};

export default App;
