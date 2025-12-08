import axios from "axios";
import { useEffect, useState } from "react";
import "../03_Meals_API_Project/style.css";

const Meals = () => {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
      .then((response) => {
        setMeals(response.data.meals);
      })
      .catch((error) => {
        console.error("There was an error fetching the meals!", error);
      });
  }, []);

  const mealsList = meals.map(({ strMeal, strMealThumb, idMeal }) => {
    return (
      <section className="card">
        <img src={strMealThumb} alt={strMeal} />
        <section className="content">
          <h3>{strMeal}</h3>
          <p>{idMeal}</p>
        </section>
      </section>
    );
  });

  return <div className="meals-container">{mealsList}</div>;
};

export default Meals;
