import React, {useEffect, useState} from 'react';
import axios from 'axios';


function RecipeFetch(){
  const {recipe, setRecipe} = useState([])

  useEffect(() => {
    axios.get("http://localhost:4000/api/recipes")
  })
}
