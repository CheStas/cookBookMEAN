module.exports = function (app) {
    return {
        recipesRoutes: require('./recipesRoutes')(app),
    };
};
