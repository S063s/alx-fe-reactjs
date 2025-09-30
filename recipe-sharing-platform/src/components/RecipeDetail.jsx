import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

function RecipeDetail() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const fetchRecipe = async () => {
      const response = await fetch(`src/data.json`);
      const data = await response.json();
      const foundRecipe = data.find((r) => r.id === parseInt(id));
      setRecipe(foundRecipe);
    };

    fetchRecipe();
  }, [id]);

  if (!recipe) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1 className="text-3xl font-bold">{recipe.title}</h1>
      <img className="w-full h-64 object-cover mb-4 hover:scale-105 transition-transform duration-300 shadow-lg rounded grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3" src={recipe.image} alt={recipe.title} />
      <p>{recipe.description}</p>
    </div>
  );
}
