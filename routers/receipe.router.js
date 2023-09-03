const router = require("express").Router();
const recipeController = require("../controllers/recipe.controller");

router.post("/", recipeController.createRecipe);
router.get("/", recipeController.getAllRecipe);

module.exports = router;