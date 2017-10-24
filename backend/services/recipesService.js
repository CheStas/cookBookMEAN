const recipesRepository = require('../repositories/recipesRepository');

function recipesService() {}

recipesService.prototype.addItem = addItem;
recipesService.prototype.updateItem = updateItem;

function addItem(data, callback) {
    data.date = Date();
    recipesRepository.add(data, (err, data) => {
        callback(err, data);
    });
}

function updateItem(id, newRecipe, callback) {
    recipesRepository.getById(id, (err, oldRecipe) => {
        if (err) { 
            return callback(err)
        };
        const forHistory = {title: oldRecipe.title, description: oldRecipe.description, date: oldRecipe.date};
        newRecipe.date = new Date();
        recipesRepository.update(id, newRecipe, forHistory, (err, data) => {
            callback(err, data);
        })
    });
}

module.exports = new recipesService();
