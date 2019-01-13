var mysql = require('mysql');

var connectionOptions = {
    host: "localhost",
    port: "3306",
    user: "root",
    database: "paytm",
    password: ""
};

// Creating a connection object
var connection = mysql.createConnection(connectionOptions);

// Connecting to the DB System
connection.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
});

module.exports = connection;