import { Routes, Route } from "react-router-dom"
import Recipes from "../pages/Recipes"
import Show from "../pages/Show"
import Post from "../pages/Post"
import Edit from "../pages/Edit"

const Main = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Recipes />} />
        <Route path="/recipes/:id" element={<Show />} />
        <Route path="/post" element={<Post />} />
        <Route path="/recipes/:id/edit" element={<Edit />} />
      </Routes>
    </main>
  )
}

export default Main
