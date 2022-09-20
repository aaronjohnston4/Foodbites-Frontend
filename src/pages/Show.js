import { useState, useEffect } from "react"
import { useParams, useNavigate } from 'react-router-dom'


const Show = () => {
  const [recipe, setRecipe] = useState(null)
  const { id } = useParams()
  const URL = `http://localhost:4000/recipes/${id}`
  const navigate = useNavigate()

  const getRecipe = async () => {
    try {
      const response = await fetch(URL)
      const result = await response.json()
      setRecipe(result)
    } catch (err) {
      console.log(err)
    }
  }

  console.log(`Current Recipe: ${JSON.stringify(recipe)}`)

  useEffect(() => {
    getRecipe()
  }, [])

  

  // After testing that person is defined you can use a ternary statement to
// conditionally render either a person's data or a loading message

const loaded = () => (
    <div className="recipe">
        <h1>Show Page</h1>
        <h2>{recipe.name}</h2>
        <h2>{recipe.instructions}</h2>
        <img src={recipe.image} alt={recipe.name+" image"} />
        <div>
			          <button className="delete" onClick={removeRecipe}>
									Remove Person
								</button>
            </div>
</div>
)

const loading = () => {
    return <h1>Loading.........</h1>
            // alternatively you can use the spinner 
}

const removeRecipe = async () => {
    try {
      const options = {
          method:"DELETE"
      }

      const response = await fetch(URL, options)

      const deletedRecipe = await response.json()

      navigate('/')

  } catch (err) {
      console.log(err)
      navigate(URL)
  }
}

return recipe ? loaded() : loading()


}

export default Show
