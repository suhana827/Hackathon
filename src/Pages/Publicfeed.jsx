import React from "react";
import "./Publicfeed.css";

const Publicfeed = () => {
  const recipes = [
    {
      id: 1,
      title: "Spaghetti Carbonara",
      author: "Alice",
      description: "A classic Italian pasta with creamy sauce.",
      image: "https://static01.nyt.com/images/2021/02/14/dining/carbonara-horizontal/carbonara-horizontal-threeByTwoMediumAt2X-v2.jpg",
    },
    {
      id: 2,
      title: "Vegan Tacos",
      author: "Bob",
      description: "Delicious tacos with plant-based filling.",
      image: "https://i0.wp.com/s.lightorangebean.com/media/20240914145357/veggie-bean-tacos_done.png?fit=1376%2C864&amp;quality=80&amp;ssl=1",
    },
    {
      id: 3,
      title: "Chocolate Cake",
      author: "Carol",
      description: "Rich and moist chocolate cake for dessert lovers.",
      image: "https://staticcookist.akamaized.net/wp-content/uploads/sites/22/2025/03/no-oven-chocolate-cake.jpg",
    },
    {
      id: 4,
      title: "Grilled Salmon",
      author: "Dave",
      description: "Perfectly grilled salmon with lemon and herbs.",
      image: "https://www.pccmarkets.com/wp-content/uploads/2017/08/pcc-rosemary-grilled-salmon-flo.jpg",
    },
    {
      id: 5,
      title: "Caesar Salad",
      author: "Eva",
      description: "Fresh romaine lettuce with creamy Caesar dressing.",
      image: "https://www.cuisinart.com/dw/image/v2/ABAF_PRD/on/demandware.static/-/Sites-us-cuisinart-sfra-Library/default/dw92573286/images/recipe-Images/classic-caesar-salad-recipe.jpg?sw=1200&sh=1200&sm=fit",
    },
    {
      id: 6,
      title: "Pancakes",
      author: "Frank",
      description: "Fluffy pancakes with syrup and berries.",
      image: "https://hips.hearstapps.com/hmg-prod/images/best-homemade-pancakes-index-640775a2dbad8.jpg?crop=0.8890503582601677xw:1xh;center,top&resize=1200:*",
    },
  ];

  return (
    <div className="public-feed">
      <h1>Public Feed</h1>
      <div className="recipe-list">
        {recipes.map((recipe) => (
          <div key={recipe.id} className="recipe-card">
            <img src={recipe.image} alt={recipe.title} />
            <h2>{recipe.title}</h2>
            <p><strong>By:</strong> {recipe.author}</p>
            <p>{recipe.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Publicfeed;
