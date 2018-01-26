var express = require('express');
var app = express();
var bodyParser = require('body-parser');

// set ejs as rendering engine
app.set('view engine', 'ejs');

// parse html forms
app.use(bodyParser.urlencoded({ extended : false }));

// render the ejs page
app.get('/', function (req, res) {
  var invalidUser = false;
  res.render('index.ejs', { invalidUser : invalidUser });
});

// when Add to Top button is clicked
app.post('/top', function (req, res) {
  console.log(req.body.todo + " is added to top of the list.");
  res.render('account.ejs');
  //lres.redirect('account.ejs');
});

app.post('/login', function (req, res) {
  if(req.body.userName == "aa" && req.body.password == "aa")
  {
	  res.render('account.ejs');
  }
  else
  {
	var invalidUser = true;
	res.render('index.ejs', { invalidUser : invalidUser });
	  
  }
	  
  //lres.redirect('account.ejs');
});

// when Add to Bottom button is clicked
app.post('/bottom', function (req, res) {
  console.log(req.body.todo + " is added to bottom of the list.");
  res.redirect('/');
});

app.listen(8000);
console.log('App is listening on PORT 8000');