import React from 'react'
import "./Navbar.css"

function Navbar() {
  return (
     <nav className="navbar">
      <ul>
        <li>
          <span className="icon">🏠</span> Dashboard
        </li>
        <li>
          <span className="icon">➕</span> Add Recipe
        </li>
        <li>
          <span className="icon">❤️</span> Favourites
        </li>
        <li>
          <span className="icon">✨</span> All Recipe
        </li>
        <li>
          <span className="icon">👥</span> Public Feed
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
