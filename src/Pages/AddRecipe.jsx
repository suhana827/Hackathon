import React from 'react'
import "./AddRecipe.css"

function AddRecipe() {
  return (
    <div class="add-recipe">
  <form class="recipe-form">
    <h2>Add New Recipe</h2>

    <label>Recipe Title</label>
    <input type="text" placeholder="Enter recipe title" />

    <label>Calories</label>
    <input type="number" placeholder="Enter calories" />

    <label>Image URL (optional)</label>
    <input type="text" placeholder="Enter image URL" />

    <label>Ingredients</label>
    <textarea rows="3" placeholder="Enter each ingredient on a new line"></textarea>

    <label>Instructions</label>
    <textarea rows="4" placeholder="Enter cooking instructions"></textarea>

    <div class="form-actions">
      <button type="submit" class="save-btn">Save Recipe</button>
      <button type="button" class="cancel-btn">Cancel</button>
    </div>
  </form>
</div>
  )
}

export default AddRecipe