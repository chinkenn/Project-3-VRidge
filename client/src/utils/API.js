import axios from "axios";

// The getRecipes method retrieves recipes from the server
// It accepts a "query" or term to search the recipe api for
export default {
  getRecipes: function (ingredient) {
    return axios.get("https://api.edamam.com/search?q=" + ingredient + "&app_id=a4a2a80e&app_key=b121efae046c73da08bbe5da9c749db7");
  },
  saveGroceryList: function (foodData) {
    return axios.post("/api/foods", foodData);
  },
  getFridge: function(user) {
    return axios.get("/api/foods/fridge/" + user);
  },
  getGrocery: function(user) {
    return axios.get("/api/foods/grocery/" + user);
  },
  toFridge: function(id,foodData) {
    return axios.post("/api/foods/post/" + id, foodData);
  }
};
