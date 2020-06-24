var express = require("express");
var router = express.Router();
const monty = require("../tools/monty");

router.use(express.json());
router.use(express.urlencoded({ extended: false }));

router.post("/", function(req, res) {
    const numberOfSimulations = parseInt(req.body.numberOfSimulations);
    const switchDoors = req.body.switchDoors;
    const results = monty(numberOfSimulations, switchDoors);
    res.send(results);
})

module.exports = router;