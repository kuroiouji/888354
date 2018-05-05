var mysql = require('mysql');
var con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'shopdb'
});

con.connect(function (err) {
    if (err) throw err;
    console.log('Connected!!!');
    var sql = "INSERT INTO products (name, description, price, category_id)";
    sql += " VALUES ('Samsung Galaxy S9+', 'smart phone in 2018', 31900, 2)";
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("1 record inserted");
    });
});