var path = require('path');
const fs = require('fs');
const jsonfileservice = require('./jsonfileservice')();
const root = path.dirname(require.main.filename);
const filepath = '/data/log.json';

function getLog(callback) {
    var json = jsonfileservice.getJsonFromFile(filepath);
    writeLog(json);
    callback(null, json);
}

function writeLog(file) {
    var upOne = file ? {count:file.count+1} : { count: 0 };
    var json = JSON.stringify(upOne);
    console.log("dirname, ", __dirname);
    fs.writeFileSync(root + filepath, json);
}

module.exports = {
    getLog: getLog,
    writeLog: writeLog
};
