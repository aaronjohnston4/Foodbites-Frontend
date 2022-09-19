import { Routes, Route } from "react-router-dom"
import Recipes from "../pages/Recipes"
import Show from "../pages/Show"
const Main = () => {
  return (
    <main>
        <h1>Component Name: Main</h1>
      <Routes>
        <Route path="/" element={<Recipes />} />
        <Route path="/recipes/:id" element={<Show />} />
      </Routes>
    </main>
  )
}

export default Main
