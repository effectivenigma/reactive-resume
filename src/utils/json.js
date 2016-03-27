var filesys = require('fs');
var merge = require('merge');
var path = require('path');

/**
 * Utility module for JSON objects.
 */
var JSONUtil = {
    
    /**
     * Reads a json file into an object.
     * Not for use on the browser.
     * @param filePath {string} The absolute path to the file to be parsed
     * @return {object} A JSON-format object
     */
    readFile: function(filePath) {
        var jobj;
        
        try {
            jobj = JSON.parse(filesys.readFileSync(filePath), "utf-8");
        } catch (e) {
            console.error(e);
        }
        return jobj;
    },
    
    /**
     * Merges two JSON objects into one.
     * @param target {object} The JSON object to merge into
     * @param j2 {object} The JSON object to merge into target
     * @returm Nothing. The target param is mutated
     */
    combine: function(target, j2) {
        merge(target, j2);
    },
    
    /**
     * Merges all json files in the given directory into a single object.
     * Not for use on the browser.
     * @param jsonDirPath {string} The absolute path to the directory containing target json files
     * @return {object} A JSON object containing data from all the json files found in the given directory.
     */
    combineDir: function(jsonDirPath) {
        var filelist = filesys.readdirSync(jsonDirPath);
        var combined = {};
        for(var i = 0; i < filelist.length; i++) {
            var file = filelist[i];
            this.combine(combined, this.readFile(file));
        }
        return combined;
    }
};

module.exports = JSONUtil;