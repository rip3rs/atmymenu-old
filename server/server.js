const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
var db;

//TODO: Automate db's per restaurant
//TODO: automate connection to individual db

mongoose.connect('mongodb://127.0.0.1/restaurant_testing');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

router.use(function (req, res, next) {
  console.log('accessed api');
  next();
});

router.get('/', (req, res) => {
  res.json({
    message: 'The force has built an api for us!',
  });
});

app.use('/api', router);
app.listen(port);
console.log('The Force is on gate ' + port);
