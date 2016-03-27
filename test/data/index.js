var jutil = require('../../src/utils/json')

var data = {};
jutil.combine(data, require('./contacts.json'));
jutil.combine(data, require('./experience.json'));
jutil.combine(data, require('./skill.json'));
jutil.combine(data, require('./education.json'));
var wrap = {"sections": data};

module.exports = wrap;