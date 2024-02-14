export const recipes = [{
  id: 'greek-salad',
  name: 'Greek Salad',
  ingredients: new Set(['tomatoes', 'cucumber', 'onion', 'olives', 'feta'])
}, {
  id: 'hawaiian-pizza',
  name: 'Hawaiian Pizza',
  ingredients: new Set(['pizza crust', 'pizza sauce', 'mozzarella', 'ham', 'pineapple'])
}, {
  id: 'hummus',
  name: 'Hummus',
  ingredients: new Set(['chickpeas', 'olive oil', 'garlic cloves', 'lemon', 'tahini'])
}];

export default function RecipeList() {

  function getRecipeElement(recipe) {
    const ingredients = Array.from(recipe.ingredients).map(ing => {
      return <li key={recipe.id + ing}>{ing}</li>
    });

    return (
        <div key={recipe.id}>
          <h1>{recipe.name}</h1>
          <ul>{ingredients}</ul>
        </div>
    )
  }

  const rec = recipes.map(recipe => {
    return getRecipeElement(recipe);
  });

  return (
    <div>
      <h1>Recipes</h1>
      {rec}
    </div>
  );
}