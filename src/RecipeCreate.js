import React, { useState } from "react";

function RecipeCreate({ onCreate }) {
  const [recipe, setRecipe] = useState({
    name: "",
    cuisine: "",
    photo: "",
    ingredients: "",
    preparation: "",
  });

  const handleChange = (e) => {
    setRecipe({ ...recipe, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onCreate(recipe);
    setRecipe({
      name: "",
      cuisine: "",
      photo: "",
      ingredients: "",
      preparation: "",
    });
  };

  return (
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr>
            <td style={{ width: "10%" }}>
              <input
                name="name"
                type="text"
                placeholder="Name"
                value={recipe.name}
                onChange={handleChange}
              />
            </td>
            <td style={{ width: "10%" }}>
              <input
                name="cuisine"
                type="text"
                placeholder="Cuisine"
                value={recipe.cuisine}
                onChange={handleChange}
              />
            </td>
            <td style={{ width: "10%" }}>
              <input
                name="photo"
                type="text"
                placeholder="Photo URL"
                value={recipe.photo}
                onChange={handleChange}
              />
            </td>
            <td style={{ width: "30%" }}>
              <textarea
                name="ingredients"
                placeholder="Ingredients"
                value={recipe.ingredients}
                onChange={handleChange}
              ></textarea>
            </td>
            <td style={{ width: "30%" }}>
              <textarea
                name="preparation"
                placeholder="Preparation"
                value={recipe.preparation}
                onChange={handleChange}
              ></textarea>
            </td>
            <td style={{ width: "10%" }}>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
