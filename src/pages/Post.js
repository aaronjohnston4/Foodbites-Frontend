// import { useParams, useNavigate } from 'react-router-dom'
import { useState } from 'react'
const BASE_URL = process.env.REACT_APP_URL || "http://localhost:4000/";

const Post = (props) => {

  // const [recipe, setRecipe] = useState(null)
  // const { id } = useParams()
  // const navigate = useNavigate()


  const [newForm, setNewForm] = useState({
    name: "",
    instructions: "",
    image: "",
  });

  const handleSubmit = async (e) => {

    e.preventDefault()
    const newRecipe = await createRecipes(newForm)

    // reset the form
    setNewForm({ name: "", instructions: "", image: "" })
  }


  // handleChange function for form
  const handleChange = (e) => {
    setNewForm({ ...newForm, [e.target.name]: e.target.value });
  };

  const createRecipes = async (recipeData) => {
    try {
      const newRecipe = await fetch(BASE_URL + "recipes", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(recipeData),
      });
    

      // testing API create request
      // console.log(await newPerson.json())

      // trigger fetch of updated People to replace stale content

    } catch (err) {
      console.log(err)

    }

  };



  return (
    <section>
      <h2>Create a new recipe</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newForm.name}
          name="name"
          placeholder="name"
          onChange={handleChange}
        />
        <input
          type="text"
          value={newForm.instructions}
          name="instructions"
          placeholder="instructions"
          onChange={handleChange}
        />
        <input
          type="text"
          value={newForm.image}
          name="image"
          placeholder="image URL"
          onChange={handleChange}
        />
        <input type="submit" value="Create Recipe" />
      </form>
    </section>


  )
}
export default Post
