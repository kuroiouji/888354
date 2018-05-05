const myDB = require('./my_db');
const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

const products = require('./products');


router.get('/products', function (req, res) {
    res.json(products.findAll());
});


router.get('/products_db', function (req, res) {
    myDB.con.connect(function(err) {
        if (err) throw err;
		var sql = "SELECT id,name,description,price FROM products";
        myDB.con.query(sql, function (err, result, fields) {
            if (err) throw err;
            var txt_data_json = JSON.stringify(result);
            // console.log(JSON.parse(txt_data_json));
            res.json(JSON.parse(txt_data_json));
        });
    });
});


module.exports = router;