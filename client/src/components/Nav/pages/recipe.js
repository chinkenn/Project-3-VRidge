import React, { Component } from "react";
import { RecipeList, RecipeListItem } from "../../RecipeList";
import API from "../../../utils/API.js";
import './recipe.css';

class Recipe extends Component{ 
  state = {
    recipes: [],
    recipeSearch: ""
  };
  handleInputChange = event => {
    // Destructure the name and value properties off of event.target
    // Update the appropriate state
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    // When the form is submitted, prevent its default behavior, get recipes update the recipes state
    event.preventDefault();
    API.getRecipes(this.state.recipeSearch)
      .then(res => {
        this.setState({ recipes: res.data.hits });
        console.log(res.data)})
      .catch(err => console.log(err));
  };

  render(){
    return(
  <div>
  <form>
    <div className="form-group">
      <label htmlFor="search">Search:</label>
      <input
        onChange={this.handleInputChange}
        value={this.state.recipeSearch}
        name="recipeSearch"
        type="text"
        className="form-control"
        placeholder="Search for a recipe"
        id="recipeSearch"
      />
      <button
        onClick={this.handleFormSubmit}
        className=" mt-3"
      >
        Search
      </button>
    </div>
  </form>
    <RecipeList>
      {this.state.recipes.map(recipe => (
        <RecipeListItem 
          key={recipe}
          thumbnail={recipe.recipe.image}
          title={recipe.recipe.label}
          ingredients={recipe.recipe.ingredientLines}
          url={recipe.recipe.shareAs}
          time={recipe.recipe.totalTime}
        />
      ))}
    </RecipeList>
  </div>
  )}
}

export default Recipe;
