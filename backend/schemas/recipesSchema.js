const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const recipesSchema = new Schema({
    title: String,
    description: String,
    date: Date,
    history: [
        {
            title: String,
            description: String,
            date: Date
        }
    ]
});

module.exports = mongoose.model('Recipes', recipesSchema);
