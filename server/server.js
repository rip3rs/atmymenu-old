const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

var db

MongoClient.connect('mongodb://127.0.0.1', (err, database) => {
    if (err) {
        return console.log(err);
    }

    db = database;

    app.listen(port, () => {
        console.log('listening on ' + port);
    });
});

app.use(bodyParser.urlencoded({extended: true}))

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.post('/quotes', (req, res) => {
    db.collection('quotes').save(req.body, (err, result) => {
        if (err) {
            return console.log(err)
        }

        console.log('saved to database');
        console.log(db);
        res.redirect('/');
    });
});
