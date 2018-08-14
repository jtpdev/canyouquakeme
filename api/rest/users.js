module.exports = {
    init(app, bodyParser, allowCrossDomain) {
        let Users = require('../models/users');

        app.use(bodyParser.urlencoded({ extended: true }));
        app.use(bodyParser.json());
        app.use(allowCrossDomain);
        var routes = require('../routes/users');
        routes(app);
    }
}