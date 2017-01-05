var express = require('express');
var router = express.Router();
var request = require('request');
/* GET All Todos */
router.get('/token', function(req, res, next) {
    res.send(JSON.parse(req.body));
});
/* POST/SAVE a Todo */
router.post('/token', function(req, res, next) {
    res.send('API working');
});

module.exports = router;