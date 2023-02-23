var express = require('express');
var router = express.Router();
const weatherController = require('../controller/weatherController.js');

/* GET users listing. */
router.get('/', function(req, res, next) {
  weatherController.weather_report(req, res);
});

module.exports = router;