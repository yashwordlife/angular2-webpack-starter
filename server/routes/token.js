var express = require('express');
var router = express.Router();
var request = require('request');
var constants = require('../constants')();
var utils = require('../utils')();

/* GET All Todos */

router.use('/token', function (req, res, next) {
    //Code to get token from the username and password of the user
    var userObject = utils.fetchJSONProperty(req.body);
    var options = {
        headers: {
            'Content-Type': constants.content_type,
            'Authorization': 'Basic ' + constants.basic_authorize_credentials
        },
        rejectUnhauthorized : false,
        form : {
            'scope' : constants.scope,
            'grant_type' : constants.grant_type,
            'username' : userObject.username,
            'password' : userObject.password
        }
    }
    request.post(constants.token_url, options, function (error, response, body) {
        req.token = body;
        next();
    });
});

/* POST/SAVE a Todo */
router.post('/token', function (req, res, next) {
    res.send(req.token);
});

module.exports = router;