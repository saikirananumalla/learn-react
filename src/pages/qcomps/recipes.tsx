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


function Recipe({ingredients} : {ingredients: Set<String>}) {
  const listItems = Array.from(ingredients).map((ingredient) => (
    <li>{ingredient}</li>
  ));
  return <ul>{listItems}</ul>;
}

export default function RecipeList() {

  const listRecipes = recipes.map(recipe => 
    <li key = {recipe.id}>
      <h2>{recipe.name}</h2>
      <Recipe ingredients={recipe.ingredients}></Recipe>
    </li>
  )
  
  return (
    <div>
      <h1>Recipes</h1>
      <ul>{listRecipes}</ul>
    </div>
  );

  
}