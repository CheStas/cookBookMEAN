const Repository = require('./generalRepository'),
    Recipes = require('../schemas/RecipesSchema');

function RecipesRepository() {
    Repository.prototype.constructor.call(this);
    this.model = Recipes;
}

RecipesRepository.prototype = new Repository();
RecipesRepository.prototype.update = update;

function update(id, body, history, callback) {
    let query = this.model.update({ _id: id }, body).update({ _id: id }, { $addToSet: { history: history } });
    query.exec(callback);
}

module.exports = new RecipesRepository();
