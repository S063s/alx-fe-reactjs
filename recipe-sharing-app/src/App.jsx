import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddRecipeForm from './components/AddRecipeForm'
import RecipeList from './components/RecipeList'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import RecipeDetails from './components/RecipeDetails'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<><AddRecipeForm /><RecipeList /></>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
