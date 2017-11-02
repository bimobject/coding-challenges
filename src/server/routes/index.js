const express = require('express');
const router = express.Router();
const tasks = require('./tasks');

router.get('/instructions', getInstructions);
router.get('/files/bower', getBowerJson);
router.use('/tasks', tasks);

var data = '/../../data/';
var jsonfileservice = require('./utils/jsonfileservice')();

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


module.exports = router;