var http = require('http');
var fs = require('fs');
var formidable = require("formidable");
var util = require('util');
const validate = require('validate-data');

var server = http.createServer(function (req, res) {
    if (req.method.toLowerCase() == 'get') {
        displayForm(res);
    } else if (req.method.toLowerCase() == 'post') {
        processAllFieldsOfTheForm(req, res);
    }

});

const data = {
    userName: "a",
    password: "a"
};
const rules = {
        required: "userName password",
        string: "userName password"
        
    };
[
    {
        rule: 'required', // Failed rule 
        errorOn: ['sample'] // Failed data fields 
    }
]
// Using the package 
let error = validate(data, rules);
 
console.log(error);   

function displayForm(res) {
    fs.readFile('login.html', function (err, data) {
        res.writeHead(200, {
            'Content-Type': 'text/html',
                'Content-Length': data.length
        });
        res.write(data);
        res.end();
    });
}

function processAllFieldsOfTheForm(req, res,app) {
	
app.get('/account', function (req, res) {
  res.send('account.html')
})
   
	
	
	
    /*form.parse(req, function (err, fields, files) {
        //Store the data from the fields in your data store.
        //The data store could be a file or database or any other store based
        //on your application.
        res.writeHead(200, {
            'content-type': 'text/plain'
        });
        res.write('received the data:\n\n');
        res.end(util.inspect({
            fields: fields,
            files: files
        }));
    });*/
	
	res.redirect("/account");
	res.end();

}

server.listen(1185);
console.log("server listening on 1185");