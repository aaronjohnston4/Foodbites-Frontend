import {useParams, Link, useNavigate} from 'react-router-dom'
import { useState, useEffect } from 'react'


function Recipes(props) {

    const [recipes, setRecipes] = useState([])

		const BASE_URL = "http://localhost:4000/recipes/";

    const getRecipes = async () => {
        try {
            const response = await fetch(BASE_URL)
            const allRecipes = await response.json()
            setRecipes(allRecipes)
            console.log(allRecipes)
        }catch(err){
            console.log(err)
        }

    }


    useEffect(()=>{getRecipes()}, [])

    console.log(`There are ${recipes.length} recipes available to render`)

	const loaded = () => {
        return recipes.map(recipe => (
                <div key={recipe._id} className='recipe-card'>
									{/* update your JSX to include a Link component */}
                   <Link to={`/recipes/${recipe._id}`}>
                       <h1>{recipe.name}</h1>
                       <img src={recipe.image} alt={recipe.name} />
                       {/* <p>{recipe.instructions}</p> */}
                   </Link>
               </div>
           )
       )
   }

    
      const loading = () => (
        <section className="recipe-list">
          <h1>
            Loading...
            <span>
              <img
                className="spinner"
                src="https://freesvg.org/img/1544764567.png"
              />{" "}
            </span>
          </h1>
        </section>
      );
        
          return (
            <div className='recipe-list-wrapper'>
            <section className="recipe-list">{recipes && recipes.length ? loaded() : loading()}</section>
            </div>
          );
        }

export default Recipes
