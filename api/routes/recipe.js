var express = require("express");
var router = express.Router();
const sqlConnection = require("../database.js");
var { v4: uuidv4 } = require("uuid");

router.use(express.json());

const data = [];

//POST recipe handle
router.post("/", (req, res) => {
  const { author_name } = req.body;

  const getDBIdQuery = "SELECT MAX(id) AS maxId FROM recipes";
  sqlConnection.query(getDBIdQuery, (error, results, fields) => {
    if (error) {
      console.log("Error getting max id from db", error);
      res.status(500).send("Error getting maximum id from db");
      return;
    }

    const postId = (results[0].maxId || 0) + 1;

    sqlConnection.query(
      "SELECT id FROM author WHERE author_name = ?",
      [author_name],
      (error, results, fields) => {
        if (error) {
          console.log("Error getting author", error);
          res.status(500).send("Error getting author");
          return;
        }

        const uniqueAuthorId = uuidv4();

        let authorId;
        if (results.length === 0) {
          authorId = uniqueAuthorId;
          sqlConnection.query(
            "INSERT INTO author (id, author_name) VALUES (?, ?)",
            [authorId, author_name],
            (error, results, fields) => {
              if (error) {
                console.log("Error creating new author", error);
                res.status(500).send("Error creating new author");
                return;
              }
            }
          );
        } else {
          authorId = results[0].id;
        }

        const postDataWithId = {
          id: postId,
          author_id: authorId,
          ...req.body,
        };

        const sql =
          "INSERT INTO recipes (id, recipe_name, ingredients, cooking_time, cooking_device, author_id) VALUES  (?, ?, ?, ?, ?, ?)";

        const {
          id,
          recipe_name,
          ingredients,
          cooking_time,
          cooking_device,
          author_id,
        } = postDataWithId;

        sqlConnection.query(
          sql,
          [
            id,
            recipe_name,
            ingredients,
            cooking_time,
            cooking_device,
            author_id,
          ],
          (error, results, fields) => {
            if (error) {
              console.log("Error executing POST query", error);
              res.status(500).send("Error inserting data into database");
              return;
            }
            res.status(200).send(postDataWithId);
          }
        );
      }
    );
  });
});

//GET recipe handler
router.get("/", (req, res) => {
  sqlConnection.query("SELECT * FROM recipes LEFT JOIN author ON recipes.author_id = author.id", (error, results, fields) => {
    if (error) {
      console.log("Error executing GET query", error);
      res.status(500).send("Error retrieving data from database");
      return;
    }

    res.send(results);
  });
});

//DELETE recipe handler
router.delete("/delete?:id", (req, res) => {
  console.log("delete request received");
  res.status(201).send("delete request received");
});

//GET author handler
router.get("/author/:authorname", (req, res) => {
  sqlConnection.query(
    `SELECT * FROM recipes INNER JOIN author ON recipes.author_id = author.id WHERE author_name LIKE "%${req.params.authorname}%"`,
    (error, results, fields) => {
      if (error) {
        console.log("Error executing GET query", error);
        res.status(500).send("Error retrieving data from database");
        return;
      }

      res.send(results);
    }
  );
});

//GET author table
router.get("/authors", (req, res) => {
  sqlConnection.query(`SELECT author_name FROM author`,
  (error, results, fields) => {
    if (error) {
      console.log("Error executing GET query", error);
      res.status(500).send("Error retrieving data from database");
      return;
    }

    res.send(results)
  })
});

//GET recipe by name handler
router.get("/recipe/:name", (req, res) => {
  sqlConnection.query(
    `SELECT * FROM recipes INNER JOIN author on recipes.author_id = author.id WHERE recipe_name LIKE "%${req.params.name}%"`,
    (error, results, fields) => {
      if (error) {
        console.log("Error executing GET query", error);
        res.status(500).send("Error retrieving data from database");
        return;
      }

      res.send(results);
    }
  );
});

//GET recipe by cooking device handler
router.get("/cookingdevice/:device", (req, res) => {
  sqlConnection.query(
    `SELECT * FROM recipes INNER JOIN author ON recipes.author_id = author.id WHERE cooking_device LIKE "%${req.params.device}%"`,
    (error, results, fields) => {
      if (error) {
        console.log("Error executing GET query", error);
        res.status(500).send("Error retrieving data from database");
        return;
      }

      res.send(results);
    }
  );
});

//GET recipe by cooking device and author handler
router.get("/deviceandauthor/:device/:author", (req, res) => {
  sqlConnection.query(
    `SELECT * FROM recipes INNER JOIN author ON recipes.author_id = author.id WHERE cooking_device LIKE "%${req.params.device}%" AND author_name LIKE "%${req.params.author}%"`,
    (error, results, fields) => {
      if (error) {
        console.log("Error executing GET query", error);
        res.status(500).send("Error retrieving data from database");
        return;
      }

      res.send(results);
    }
  );
});

module.exports = router;
