import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

function HomePage() {
  const [Recipes, setRecipes] = useState([]);

  useEffect(() => {
    // Fetch recipes from the API or use a static JSON file
    const fetchRecipes = async () => {
      const response = await fetch("src/data.json");
      const data = await response.json();
      setRecipes(data);
    };

    fetchRecipes();
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-bold md:text-4xl">Recipe Sharing Platform</h1>
      {/* Render recipes */}
      <div className="container mx-auto p-4">
        {Recipes.map((recipe, index) => (
          <div key={index} className="mb-8">
            <img className="w-full h-64 object-cover mb-4 hover:scale-105 transition-transform duration-300 shadow-lg rounded" src={recipe.image} alt={recipe.title} />
            <h2 className="text-xl font-semibold">{recipe.title}</h2>
            <p>{recipe.description}</p>
          </div>
        ))}
        <div className="mt-8">
          {Recipes.map((recipe, index) => (
            <div key={index} className="mb-8">
              <img className="w-full h-64 object-cover mb-4 hover:scale-105 transition-transform duration-300 shadow-lg rounded grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3" src={recipe.image} alt={recipe.title} />
              <h2 className="text-xl font-semibold">{recipe.title}</h2>
              <p>{recipe.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default HomePage;