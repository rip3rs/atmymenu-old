const Hapi = require('hapi');
const server = new Hapi.Server();
const mongoose = require('mongoose');
const routeProvider = require('./providers/routeProvider');

// const bodyParser = require('body-parser');
var db;

server.connection({
  port: 8000,
});

routeProvider.init(server);

//TODO: Automate db's per restaurant
//TODO: automate connection to individual db
// mongoose.connect('mongodb://127.0.0.1/restaurant_testing');

// Start the server
server.start((err) => {
  if (err) {
    throw err;
  }
  console.log('The Force is at gate ', server.info.uri);
});
