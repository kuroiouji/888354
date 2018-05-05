var express = require('express'); //include libary
var bodyParser = require('body-parser'); //include libary
var mysql = require('mysql'); //include libary
var app = express();
var port = 8080; //port id

app.use(express.static('src/views')); //call views
app.use(express.static('node_modules'));
app.use(bodyParser.urlencoded({
    extended: true
}));

app.set('views', './');
app.set('view engine', 'ejs');

app.listen(port, function () {
    console.log('Starting node.js on port ' + port);
});

app.get('/table', function (req, res) {
    res.render('table', {
        datas: {}
    });
}); //req->request res->respone