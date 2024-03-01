var express = require("express");
var router = express.Router();
const sqlConnection = require("../database.js");
var {v4: uuidv4} = require("uuid")

router.use(express.json());

const data = [];
const userId = uuidv4();

//POST user handler
router.post("/", (req, res) => {
    const uniqueId = userId;
  sqlConnection.query("INSERT INTO users (id, username, password) VALUES (?, ?, ?)", [uniqueId, req.body.username, req.body.password], (error, results, fields) => {
    if (error) {
        console.log("Error creating user", error);
        res.status(500).send("Error creating user");
        return;
    }
  });
});

//GET user handler
router.get("/", (req, res) => {
  sqlConnection.query("SELECT * FROM users", (error, results, fields) => {
    if (error) {
      console.log("Error executing Users GET query", error);
      res.status(500).send("Error retrieving data from database");
      return;
    }

    res.send(results);
  });
});

module.exports = router;
