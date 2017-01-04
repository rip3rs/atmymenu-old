// /**
//  * Main route files
//  */
//
// class Router {
//   const express = require('express');
//   const app = express();
//   const router = express.Router();
//   const bodyParser = require('body-parser');
//   app.use(bodyParser.urlencoded({ extended: true }));
//   app.use(bodyParser.json());
//
//   constructor(route, action) {
//     this.route = route;
//     this.verb = action;
//   }
//
//   router.use(function (req, res, next) {
//     console.log('accessed api ' + route + ' with action ' + action);
//     next();
//   });
//
//   setRoute() {
//
//   }
//
//   getRoute() {
//
//   }
// }
//
//
//
//
// router.get('/', (req, res) => {
//   res.json({
//     message: 'The force has built an api for us!',
//   });
// });
//
// require('../app/src/');
//
// app.use('/api', router);
// app.listen(port);
// console.log('The Force is on gate ' + port);
