import React from 'react'
import "./Dashboard.css";

function Dashboard() {
  return (
      <div className="dashboard">
      <header>
        <h1 className="heading">Hello,</h1>
        <p className="para">Ready to cook something amazing today?</p>
      </header>

      <section className="stats">
        <div className="stat-card">
          <h3 className="one">Total Recipe</h3>
          <h1 className="num">0</h1>
        </div>
        <div className="stat-card">
          <h3 className="one">Total Calories</h3>
          <h1 className="num">0</h1>
        </div>
        <div className="stat-card">
          <h3 className="one">Favorites</h3>
          <h1 className="num">0</h1>
        </div>
      </section>

      <h3 className="action">Quick Actions</h3>

      <div className="quick-actions">
        <button className="action-card">
          <span className="icon">➕</span>
          <h4>Add Recipe</h4>
          <p>Create a new recipe</p>
        </button>

        <button className="action-card">
          <span className="icon">❤️</span>
          <h4>Favorites</h4>
          <p>View saved recipes</p>
        </button>

        <button className="action-card">
          <span className="icon">🤖</span>
          <h4>AI Recipes</h4>
          <p>Generate with AI</p>
        </button>

        <button className="action-card">
          <span className="icon">🌍</span>
          <h4>Public Feed</h4>
          <p>Browse community recipes</p>
        </button>
      </div>
    </div>
  );
}

export default Dashboard