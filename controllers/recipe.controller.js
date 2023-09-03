const RecipeModel = require("../models/receipe.model");

exports.getAllRecipe = async (req, res) =>{
    try {
        const allRecipe = await RecipeModel.find();
        res.status(200).json(allRecipe);
    } catch (error) {
        res.status(500).send("error: " + error);
    }
}

exports.createRecipe = async (req, res) => {
    try{
        const data = req.body;
        const recipeModel = new RecipeModel(data);
        const response = await recipeModel.save();
        res.status(200).json(response);
    }catch(error){
        res.status(500).send("error: " + error);
    }
}