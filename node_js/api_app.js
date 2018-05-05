var express = require('express');
var app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

var mysql = require('mysql');
var con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'shopdb'
});


var port = 8080;
app.get('/', function (req, res) {
    res.send('<h1>Hello SE by Node.js</h1>');
    res.end();
});
app.listen(port, function () {
    console.log('Starting node.js on port ' + port);
});

var products = require('./products');;
app.get('/products', function (req, res) {
    res.json(products.findAll());
});

app.get('/products/:id', function (req, res) {
    var id = req.params.id;
    res.json(products.findById(id));
});

app.post('/newproduct', function (req, res) {
    var json = req.body;
    // res.send('Add new ' + json.name + ' Completed!');
    var id = json.id;
    // res.json(products.findById(id));
    var sql = 'SELECT * FROM products WHERE id = ' + id;
    con.connect(function (err) {
        if (err) throw err;
        con.query(sql, function (err, result, fields) {
            if (err) throw err;
            var data = JSON.stringify(result);
            // console.log(data);
            res.json(JSON.parse(data));
            res.end('method post runing...');
        });
    });
});

app.get('/testApi', function (req, res) {
    var json = req.body;
    // res.send('Add new ' + json.name + ' Completed!');
    var id = json.id;
    // res.json(products.findById(id));
    var sql = 'SELECT * FROM products';
    con.connect(function (err) {
        if (err) throw err;
        con.query(sql, function (err, result, fields) {
            if (err) throw err;
            var data = JSON.stringify(result);
            // console.log(data);
            res.json(JSON.parse(data));
            res.end('method post runing...');
        });
    });
});