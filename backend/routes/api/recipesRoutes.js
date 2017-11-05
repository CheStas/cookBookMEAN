const
    apiResponse = require('express-api-response'),
    recipesService = require('../../services/recipesService'),
    recipesRepository = require('../../repositories/recipesRepository'),
    baseUrl = '/api/recipes/';

module.exports = function (app) {

    app.get(baseUrl, function (req, res, next) {
        recipesRepository.getAll((err, data) => {
            res.data = data;
            res.err = err;
            next();
        });
    }, apiResponse);

    app.get(baseUrl + ':id', (req, res, next) => {
        recipesRepository.getById({ _id: req.params.id }, (err, data) => {
            res.data = data;
            res.err = err;
            next();
        });
    }, apiResponse);

    app.post(baseUrl, (req, res, next) => {
        recipesService.addItem(req.body, (err, data) => {
            res.data = data;
            res.err = err;
            next();
        });
    }, apiResponse);

    app.put(baseUrl + ':id', (req, res, next) => {
        recipesService.updateItem({ _id: req.params.id }, req.body, (err, data) => {
            res.data = data;
            res.err = err;
            next();
        });
    }, apiResponse);

    app.delete(baseUrl + ':id', (req, res, next) => {
        recipesRepository.deleteById(req.params.id, (err, data) => {
            res.err = err;
            res.data = data;
            next();
        });
    }, apiResponse);
};
