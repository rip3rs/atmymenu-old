const Routes = require('./../Routes');

class RouteProvider extends Routes {
  constructor(server, api) {
    super();
    this.server = server;
    this.api = '/' + api;
    this.registerRoutes();
  }

  setRoute(method, path, handler) {
    this.server.route({
      method: method,
      path: this.api + path,
      handler: handler,
    });
  }

  registerRoutes() {
    this.routesPath.forEach((route) => {
      this.setRoute(route[0], route[1], route[2]);
    });
  }
}

module.exports = RouteProvider;
