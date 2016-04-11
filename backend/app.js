var express = require('express');
var bodyParser = require('body-parser');
var router = express.Router();
var app = express();

app.use(bodyParser.json());

/**
 *  MESSAGES
 */
var messages = [];
router.get('/messages', function(req, res) {
    console.log('[GET /messages]');
    res.send(messages);
});
router.put('/messages', function (req, res) {
    var message = req.body;
    console.log('[PUT /messages]: ' + JSON.stringify(message));
    messages.push(message);
    res.end();
});

app.use('/', router);

module.exports = app;