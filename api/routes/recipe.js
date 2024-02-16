var express = require("express");
var router = express.Router();
const sqlConnection = require("../database.js");
var { v4: uuidv4 } = require("uuid");

router.use(express.json());

const data = [];

//POST recipe handle
router.post("/post", (req, res) => {
  const postId = uuidv4();
  const postDataWithId = { id: postId, ...req.body };

  const sql =
    "INSERT INTO recipes (id, recipe_name, ingredients, cooking_time, cooking_device) VALUES (?, ?, ?, ?, ?)";

  const { id, recipe_name, ingredients, cooking_time, cooking_device } =
    postDataWithId;

  sqlConnection.query(
    sql,
    [id, recipe_name, ingredients, cooking_time, cooking_device],
    (error, results, fields) => {
      if (error) {
        console.log("Error executing POST query", error);
        res.status(500).send("Error inserting data into database");
        return;
      }
      res.status(200).send(postDataWithId);
    }
  );
});

//GET recipe handler
router.get("/get", (req, res) => {
  sqlConnection.query("SELECT * FROM recipes", (error, results, fields) => {
    if (error) {
      console.log("Error executing GET query", error);
      res.status(500).send("Error retrieving data from database");
      return;
    }

    res.send(results);
  });
});

//GET by name recipe handler
router.get("/post/:recipename", (req, res) => {
  const postName = req.params.recipename;
  const postData = data.find((post) => post.recipeName.includes(postName));

  res.send(postData);
});

//GET by cooking device recipe handler
router.get("/post/:cookingdevice", (req, res) => {
  const postDevice = req.params.cookingdevice;
  console.log("this is the postDevice", postDevice);
  const postData = data.filter((post) => post.cookingDevice === postDevice);
  console.log(postData);

  console.log("get request recieved");
  res.send(postData);
});

//DELETE recipe handler
router.delete("/delete?:id", (req, res) => {
  console.log("delete request received");
  res.status(201).send("delete request received");
});

module.exports = router;
