var express = require('express');
var router = express.Router();

//POST recipe handle
router.post('/', function(req, res) {
    console.log("post request recieved")
});

module.exports = router;