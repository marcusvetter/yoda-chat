var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var app = express();
var router = express.Router();
var convertFromYodaText = require('./convertFromYodaText');
var convertToYodaText = require('./convertToYodaText');

app.use(bodyParser.json());
app.use(cors());

/**
 *  MESSAGES
 */
var yodaMessages = [];
var jediMessages = [];
router.get('/messages', function(req, res) {
    var mode = req.param('mode');
    console.log('[GET /messages/' + mode + ']');

    if (mode == '0') {
        // YODA
        res.send(yodaMessages);
    } else {
        // JEDI
        res.send(jediMessages);
    }
});
router.put('/messages', function (req, res) {
    var message = req.body;
    var mode = req.param('mode');
    console.log('[PUT /messages/' + mode + ']: ' + JSON.stringify(message));
    if (mode == '0') {
        // YODA
        yodaMessages.push(message);
        var jediMessage = JSON.parse(JSON.stringify(message));
        jediMessage.text = convertFromYodaText(jediMessage.text);
        jediMessages.push(jediMessage);
    } else {
        // JEDI
        jediMessages.push(message);
        var yodaMessage = JSON.parse(JSON.stringify(message));
        yodaMessage.text = convertToYodaText(yodaMessage.text);
        yodaMessages.push(yodaMessage);
    }
    res.end();
});
router.delete('/messages', function (req, res) {
    yodaMessages = [];
    jediMessages = [];
    res.end();
});

app.use('/', router);

module.exports = app;