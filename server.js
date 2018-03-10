// server.js
// where your node app starts

// init project
var strftime = require('strftime');
var isDate = require('validate.io-strict-date');
var express = require('express');
var app = express();

// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});
/*
app.get("/dreams", function (request, response) {
  response.send(dreams);
});
*/
app.param('userInput', (req, res, next, userInput) => {
  // 1. Check if valid date
  var timestamp = userInput;
  // 2. If valid date, return object with unix and natural with values
  // TODO: Check if input is valid
  if (isDate(new Date(timestamp))) {
    req.userInput = { "unix": timestamp, "natural": strftime('%B %d, %Y', new Date(Number(timestamp)))};
  } else {
  // 3. If invalid date, return obejct with null for both values
    req.userInput = { "unix": null, "natural": null };
  }  
  next();
});

app.get('/:userInput', (req, res) => {
  res.json(req.userInput);
});
/*
// could also use the POST body instead of query string: http://expressjs.com/en/api.html#req.body
app.post("/dreams", function (request, response) {
  dreams.push(request.query.dream);
  response.sendStatus(200);
});

// Simple in-memory store for now
var dreams = [
  "Find and count some sheep",
  "Climb a really tall mountain",
  "Wash the dishes"
];
*/
// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
