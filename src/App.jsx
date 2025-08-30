import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './Pages/Navbar'
import Dashboard from './Pages/Dashboard'
import AddRecipe from './Pages/AddRecipe'
import FavRecipe from './Pages/FavRecipe'
import AiRecipe from './Pages/AiRecipe'
import Publicfeed from './Pages/Publicfeed'


function App() {
  return (
    <Router>
   <Navbar />
  <Routes>
    <Route path="/" element={<Dashboard />} />
    <Route path="/add-recipe" element={<AddRecipe />} />
    <Route path="/favorites" element={<FavRecipe />} />
    <Route path="/ai-recipe" element={<AiRecipe />} />
    <Route path="/public-feed" element={<Publicfeed />} />
  </Routes>
  </Router>
  )
}



