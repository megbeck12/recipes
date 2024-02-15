const mysql = require("mysql2");
const { beekeeper_username, beekeeper_password } = require("./variables");

const sqlConnection = mysql.createConnection({
  host: "localhost",
  user: beekeeper_username,
  password: beekeeper_password,
  database: "recipes",
});

sqlConnection.connect((err) => {
  if (err) {
    console.log("Error conencting to database", err.stack);
    return;
  }
  console.log("Connected to sql database", sqlConnection.threadId);
});

module.exports = sqlConnection;
