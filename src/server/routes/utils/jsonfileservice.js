var path = require('path');
var root = path.dirname(require.main.filename);

module.exports = function() {
    var service = {
        getJsonFromFile: getJsonFromFile
    };
    return service;

    function getJsonFromFile(file) {
        var fs = require('fs');
        var json = getConfig(file);
        return json;

        function readJsonFileSync(filepath, encoding, callback) {
            if (typeof (encoding) === 'undefined') {
                encoding = 'utf8';
            }
            var file = fs.readFileSync(filepath, encoding);
            return file ? JSON.parse(file) : {};
        }

        function getConfig(file) {
            console.log("__dirname: ", __dirname);
            console.log("root: ", root);
            var filepath = __dirname + '/../..' + file;
            return readJsonFileSync(filepath);
        }
    }
};
