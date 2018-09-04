const routes = require('next-routes')

module.exports = routes()
    .add('index', '/')
    .add('DefaultLayout', '/default-layout', 'DefaultLayout')
    .add('DefaultLayoutWithComponent', '/default-layout/:component', 'DefaultLayout')