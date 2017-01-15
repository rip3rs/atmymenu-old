const Hapi = require('hapi');
const server = new Hapi.Server();
const mongoose = require('mongoose');
// const bodyParser = require('body-parser');
var db;

server.connection({
  port: 8000,
});

//TODO: Automate db's per restaurant
//TODO: automate connection to individual db
// mongoose.connect('mongodb://127.0.0.1/restaurant_testing');

// Add the route
server.route({
  method: 'GET',
  path: '/api/hi',
  handler: function(request, reply) {
    return reply('hello world');
  }
});

// Start the server
server.start((err) => {
  if (err) {
    throw err;
  }
  console.log('The Force is at gate ', server.info.uri);
});
