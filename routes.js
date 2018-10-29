const routes = require('next-routes')();

routes
    .add('index', 'index')
    .add('/certificate/new', '/certificate/new')
    .add('/certificate/:address', '/certificate/detail');


module.exports = routes;