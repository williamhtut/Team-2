var express = require('express');
var app = express();
var bodyParser = require('body-parser');

// set ejs as rendering engine
app.set('view engine', 'ejs');

// parse html forms
app.use(bodyParser.urlencoded({ extended : false }));

//Use files in public directory
app.use(express.static('public'))

// render the ejs page
app.get('/', function (req, res) {
  var invalidUser = false;
  res.render('index.ejs', { invalidUser : invalidUser });
});

// render the logout page
app.get('/logout', function (req, res) {
  res.render('logout.ejs');
})

// render the password reset page
app.get('/reset', function (req, res) {
  var blank = false;
  res.render('reset.ejs', { blank : blank });
})


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

//When reset password form is posted
app.post('/reset_password', function (req, res) {
  if (req.body.emailAddress != "")
  {
    res.render('reset_password.ejs');
  }
   else
  {
  var blank = true;
  res.render('reset.ejs', { blank : blank });
    
  }
  });


// when Add to Bottom button is clicked
app.post('/bottom', function (req, res) {
  console.log(req.body.todo + " is added to bottom of the list.");
  res.redirect('/');
});

app.listen(8000);
console.log('App is listening on PORT 8000');