const express = require('express');
const routes = require('./routes');
const PORT = 3333;

const BodyParser = require('body-parser');

require('./database/index');

const app = express();

app.all('/*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  res.header("Access-Control-Allow-Methods", "*");
  next();
});

app.use(BodyParser.urlencoded({extended : true}));
app.use(BodyParser.json());
app.post('/sayhello/', function(req, res) {
  console.log(req.body);
  res.send(req.body);
});

app.use(express.json());
app.use(routes);
app.listen(3333, () => console.log('Listen on port ' + PORT));