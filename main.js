let app = require('express')();
let http = require('http').Server(app);

let rest = require('./api/rest/full');
rest.initAll(app);