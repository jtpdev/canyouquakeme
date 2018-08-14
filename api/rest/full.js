let restUsers = require('./users');
let bodyParser = require('body-parser');

module.exports = {
    initAll(app) {

        let allowCrossDomain = function (req, res, next) {
            res.header('Access-Control-Allow-Origin', '*');
            res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
            res.header('Access-Control-Allow-Headers', '*');

            next();
        }

        restUsers.init(app, bodyParser, allowCrossDomain);

        let port = process.env.PORT || 3000;
        app.listen(port);
        console.log('RESTful API server started on: ' + port);
    }
}