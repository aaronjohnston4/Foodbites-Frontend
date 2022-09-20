import { Routes, Route } from "react-router-dom"
import Recipes from "../pages/Recipes"
import Show from "../pages/Show"
import Post from "../pages/Post"
const Main = () => {
  return (
    <main>
        <h1>Component Name: Main</h1>
      <Routes>
        <Route path="/" element={<Recipes />} />
        <Route path="/recipes/:id" element={<Show />} />
        <Route path="/post" element={<Post />} />
      </Routes>
    </main>
  )
}

export default Main
