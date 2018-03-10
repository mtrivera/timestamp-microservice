// server.js
// where your node app starts

// init project
var moment = require('moment');
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

app.param('userInput', (req, res, next, userInput) => {
  // 1. Check if valid date
  var uInput = userInput;
  var tsCheck = moment(uInput, ['MMMM D, YYYY', 'x']);
  //var unixCheck = moment(uInput, 'x');
  //var naturalCheck = moment(uInput, 'MMMM D, YYYY');
  // 2. If valid date, return object with unix and natural with values
  if (tsCheck.isValid()) {
    // TODO: Natural date output is incorrect, look into it
    req.userInput = { "unix": Number(tsCheck.format('x')), "natural": tsCheck.format('MMMM D, YYYY')};
  } else {
  // 3. If invalid date, return obejct with null for both values
    req.userInput = { "unix": null, "natural": null };
  }
  next();
});

app.get('/:userInput', (req, res) => {
  res.json(req.userInput);
});

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
