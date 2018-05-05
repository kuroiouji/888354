var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "068010085",
  database : "shopdb"
});

exports.con = con; 