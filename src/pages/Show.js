import { useState, useEffect } from "react"
import { useParams, Link, useNavigate } from 'react-router-dom'


const Show = () => {
    const [recipe, setRecipe] = useState(null)
    const { id } = useParams()
    const URL = `http://localhost:4000/recipes/${id}`
    const navigate = useNavigate()



    console.log(`Current Recipe: ${JSON.stringify(recipe)}`)

    useEffect(() => {
        const getRecipe = async () => {
            try {
                const response = await fetch(URL)
                const result = await response.json()
                setRecipe(result)
            } catch (err) {
                console.log(err)
            }
        }
        getRecipe()
    }, [URL])



    // After testing that person is defined you can use a ternary statement to
    // conditionally render either a person's data or a loading message

    const loaded = () => (
        <div className="recipe">
            {/* <h1>Show Page</h1> */}
            <h2>{recipe.name}</h2>
            <p>{recipe.instructions}</p>
            <img src={recipe.image} alt={recipe.name + " image"} />
            <div>
                <button className="delete" onClick={removeRecipe}>
                    Remove Recipe
                </button>
            </div>
            <div>
            <Link to={`/recipes/${id}/edit`}>Edit Recipe</Link>
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
                method: "DELETE"
            }

            const response = await fetch(URL, options)

            await response.json()

            navigate('/')

        } catch (err) {
            console.log(err)
            navigate(URL)
        }
    }

    return recipe ? loaded() : loading()


}

export default Show
