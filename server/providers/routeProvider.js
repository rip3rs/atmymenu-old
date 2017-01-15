var routeProvider = {

    server: null,
    routes: require('../routes'),
    domain: '/api',

    init: function (server) {
        this.server = server;
        this.registerRoutes();
      },

    setRoute: function (method, path, handler) {
      this.server.route({
        method: method,
        path: routeProvider.domain + path,
        handler: handler,
      });
    },

    registerRoutes: function () {
      this.routes.forEach(function (route) {
        routeProvider.setRoute(route[0], route[1], route[2]);
      });
    },

  };

module.exports = routeProvider;
