var express = require('express'),
    app = express()
    port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.post('/quotes', (req, res) => {
  console.log('Hellooooooooooooooooo!')
})

app.listen(port, () => {
  console.log('Example app listening on port 3000!');
});
