class Routes {
  constructor() {
    const menu = require('./controllers/menu');
    this.routesPath = [

      //MENU
      ['GET', '/menu', menu.getMenu],
      ['POST', '/menu', menu.addToMenu],
      ['DELETE', '/menu/{id}', menu.deleteMenuItem],

    ];
  }
}

module.exports = Routes;
