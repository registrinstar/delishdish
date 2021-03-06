var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var RecipeSchema = new Schema({
    name: String,
    email: String,
    calorie_count: Number,
    ingredients: Schema.Types.Mixed,
    instructions: String
});

module.exports = mongoose.model('Recipe', RecipeSchema);
