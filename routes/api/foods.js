const router = require("express").Router();
const foodsController = require("../../controllers/foodsController");

// Matches with "/api/books"
router.route("/")
  .get(foodsController.findAll)
  .post(foodsController.create);

// route.route("/:id")
//   .post(foodsController.update);

  // Matches with "/api/books/:id"
router
  .route("/post/:id")
  // .get(foodsController.findByUser)
  .post(foodsController.update)
  .delete(foodsController.remove);

router
  .route("/fridge/:user")
  .get(foodsController.findByUserFridge);

router
  .route("/grocery/:user")
  .get(foodsController.findByUserGrocery);

module.exports = router;
