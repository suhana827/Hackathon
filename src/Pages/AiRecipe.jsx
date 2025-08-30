import React from 'react';
import "./AiRecipe.css"


function AiRecipe() {
  return (
    <div className="ai-generator">
      <h2>🤖 AI Recipe Generator</h2>
      <p className="subtitle">
        Enter ingredients you have, and let AI create a delicious recipe for you!
      </p>

      <div className="generator-card">
        <label htmlFor="ingredients">Generate Recipe</label>
        <input
          type="text"
          id="ingredients"
          placeholder="Enter ingredients separated by commas (e.g., chicken, rice, broccoli)"
        />
        <button className="generate-btn">⚡ Generate Recipe</button>
      </div>

      <div className="info-card">
        <h3>How it works:</h3>
        <ul>
          <li>Enter the ingredients you have available</li>
          <li>Our AI will suggest a complete recipe with cooking instructions</li>
          <li>Save recipes you like to your personal collection</li>
          <li>Get healthy alternatives and cooking tips</li>
        </ul>
      </div>
    </div>
  );
}
  

export default AiRecipe