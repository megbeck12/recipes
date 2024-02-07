var express = require('express');
var router = express.Router();

//GET recipe handler
router.get('/', function(req, res) {
    console.log("get request recieved")
    const data = [{
        id: 1,
        name: "recipes testing",
        description: "the backend is working properly"
    }]
    res.send(data);
});

module.exports = router;