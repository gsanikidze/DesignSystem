const routes = require('next-routes');

module.exports = routes()
  .add('index', '/')
  .add('SYSTEMIZER', '/systemizer', 'SYSTEMIZER')
  .add('SYSTEMIZERWithComponent', '/systemizer/:component', 'SYSTEMIZER');
