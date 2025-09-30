function AddRecipeForm() {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [instructions, setInstructions] = useState("");
  const [steps, setSteps] = useState([]);
  const [errors, setErrors] = useState([]);

  
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!validateForm()) return;

    const newRecipe = {
      title,
      ingredients: ingredients.split(","),
      instructions: instructions.split(","),
      steps
    };
  };

  const validateForm = () => {
    const newErrors = [];
    if (!title) newErrors.push("Title is required.");
    if (!ingredients) newErrors.push("Ingredients are required.");
    if (!instructions) newErrors.push("Instructions are required.");
    setErrors(newErrors);
    return newErrors.length === 0;
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="text-2xl font-bold mb-4 rounded hover:shadow-lg md:grid-cols-2">Add a New Recipe</h2>
      <label>
        Title:
        <input type="text" name="title" required value={title} onChange={(e) => setTitle(e.target.value)} />
      </label>
      <label>
        Ingredients:
        <textarea name="ingredients" required value={ingredients} onChange={(e) => setIngredients(e.target.value)} />
      </label>
      <label>
        Instructions:
        <textarea name="instructions" required value={instructions} onChange={(e) => setInstructions(e.target.value)} />
      </label>
      <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded md:col-span-2" type="submit">Add Recipe</button>
    </form>
  );
}

export default AddRecipeForm;