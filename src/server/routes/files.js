const express = require('express');
const router = express.Router();

const jsonfileservice = require('./utils/jsonfileservice')();
const folderpath = '/data/';

router.get('/package', getPackage);

function getPackage(req, res) {
    var json = {
        data: "I'm empty, except for the part explaining that I'm empty, that is."
    };
    res.send(json);

}

module.exports = router;