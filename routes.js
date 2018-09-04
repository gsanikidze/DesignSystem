const routes = require('next-routes')

routes.rn = {
    home: 'home'
}

module.exports = routes()
    .add('index', '/')
    .add('DesignSystem', '/design-system', 'DesignSystem')
    .add('DesignSystemWithComponent', '/design-system/:component', 'DesignSystem')