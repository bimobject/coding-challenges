const express = require('express');
const router = express.Router();
const files = require('./files');
const tasks = require('./tasks');
const logService = require('./utils/log.service');

router.use('/files', files);
router.use('/tasks', tasks);
router.get('/log', getLog);

function getLog(req, res, next) {
    logService.getLog(function(err, data) {
        res.send(data);
    });
}

module.exports = router;