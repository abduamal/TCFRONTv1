import React, {useState, useEffect} from 'react';
import axios from 'axios';


function RecipeFetch(){
  const [recipes, setRecipe] = useState([])

  useEffect(() => {
    axios.get('http://localhost:4000/api/recipes')
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      })
  })

  return(
    <div>
      <ul>
        {recipes.map(recipe => <li key={recipe.id}>{recipe.recipe_title}</li>)}
      </ul>
    </div>
  )
}

export default RecipeFetch
