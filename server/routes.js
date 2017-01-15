
var home = require('./controllers/home');

var routes = [

  //HOME
  ['GET', '/hi', home.start],
  ['GET', '/hiTo/{name}', home.hiTo],

];

module.exports = routes;
