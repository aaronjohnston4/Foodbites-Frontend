import { useParams, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
const BASE_URL = process.env.REACT_APP_URL || "http://localhost:4000/";


const Edit = (props) => {

  
  const { id } = useParams()
  const navigate = useNavigate()
  const [editForm, setEditForm] = useState({
    name:"",
    instructions:"",
    image:""
  })
  const URL = `${BASE_URL}recipes/${id}/edit`


  const updateRecipe = async (e) => {
    e.preventDefault()
    console.log("what does this do", editForm)
    try {
      const options = {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(editForm),
      }

      const response = await fetch(URL, options)
      const newUpdateRecipe = await response.json()
      console.log(newUpdateRecipe)
      setEditForm(newUpdateRecipe)
      navigate(`/recipes/${id}`)
    } catch (err) {
      console.log(err)
    }
  }

  const handleChange = event => {
    setEditForm({ ...editForm, [event.target.name]: event.target.value })
  }

  useEffect(() => {
    const getRecipe = async () => {
      console.log("hello this is a test")
  
      try {
        const response = await fetch(`${BASE_URL}recipes/${id}`)
        const result = await response.json()
        console.log("hello", result)
        setEditForm(result)
      } catch (err) {
        console.log(err)
      }
    }
    getRecipe()
  }, [id])

  return (
    <section>
      <h2>Edit this Recipe</h2>
      <form onSubmit={(e) => updateRecipe(e)}>
        <input
          type="text"
          value={editForm.name}
          name="name"
          placeholder="name"
          onChange={(e) => handleChange(e)}
        />
        <input
          type="text"
          value={editForm.instructions}
          name="instructions"
          placeholder="instructions"
          onChange={(e) => handleChange(e)}
        />
        <input
          type="text"
          value={editForm.image}
          name="image"
          placeholder="image URL"
          onChange={(e) => handleChange(e)}
        />
        <input type="submit" value="Update Recipe" />
      </form >
    </section >

  )
}

export default Edit
