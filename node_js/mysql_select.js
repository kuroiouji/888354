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
    var sql = 'SELECT * FROM products';
    con.query(sql, function (err, result, fields) {
        if (err) throw err;
        // console.log(result);
        result.forEach(function(data){
            console.log(data);
        });
    });
});