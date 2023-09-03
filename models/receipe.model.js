const mongoose = require('mongoose');

const RecipeSchema = mongoose.Schema({
    recipe_name: {
        type: 'string',
        required: true,
    },
    recipe_images: {
        type: 'array',
        required: true,
    },
    ingredients: {
        type: "string",
        required: true,
    },
    instructions: {
        type: "string",
        required: true,
    },
    time_to_complete: {
        type: "string",
        required: true,
    },
    diet: {
        type: "string",
        required: false,
    },
    creator_id: {
        type: "string",
        required: false,
    },
    cusine_type: {
        type: "string",
        required: true,
    }
});

module.exports = mongoose.model("recipes", RecipeSchema);