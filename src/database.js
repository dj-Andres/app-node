const mysql = require("mysql");
const { database } = require("./keys");
const connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: '',
  database: 'nodejs',
});

connection.connect((error) => {
  if (error) throw error;
  console.log("Database server running!");
});

module.exports = connection;
