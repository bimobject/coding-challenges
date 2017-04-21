module.exports = function(app) {
    var api = '/api';
    var data = '/../../data/';
    var jsonfileservice = require('./utils/jsonfileservice')();

    app.get(api + '/instructions', getInstructions);
    app.get(api + '/files/bower', getBowerJson);

    function getAlbums(req, res, next) {
    }

    function getInstructions(req, res, next) {
        var json = jsonfileservice.getJsonFromFile(data + 'instructions.json');
        res.send(json);
    }

    function getBowerJson(req, res, next) {
        var json = {
            data: "I'm empty, except for the part explaining that I'm empty, that is."
        };
        res.send(json);
    }
};
