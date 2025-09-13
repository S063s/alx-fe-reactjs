import { useRecipeStore } from './recipeStore';

const RecipeDetails = ({ recipeId }) => {
  const recipe = useRecipeStore(state =>
    state.recipes.find(recipe => recipe.id === recipeId)
  );
  const deleteRecipe = useRecipeStore(state => state.deleteRecipe);

  return (
    <div>
      <h1>{recipe.title}</h1>
      <p>{recipe.description}</p>
      <button onClick={() => deleteRecipe(recipe.id)}>Delete Recipe</button>
    </div>
  );
};

export default RecipeDetails;