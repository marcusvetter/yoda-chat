var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var app = express();
var router = express.Router();
var convertFromYodaText = require('./convertFromYodaText');
var convertToYodaText = require('./convertToYodaText');
var debug = require('debug')('backend:server');
var http = require('http');

app.use(bodyParser.json());
app.use(cors());

/**
 *  MESSAGES
 */
var yodaMessages = [];
var humanMessages = [];
router.get('/messages', function(req, res) {
    var mode = req.param('mode');
    console.log('[GET /messages/' + mode + ']');

    if (mode == '0') {
        // YODA
        res.send(yodaMessages);
    } else {
        // HUMAN
        res.send(humanMessages);
    }
});
router.put('/messages', function (req, res) {
    var message = req.body;
    var mode = req.param('mode');
    console.log('[PUT /messages/' + mode + ']: ' + JSON.stringify(message));
    if (mode == '0') {
        // YODA
        yodaMessages.push(message);
        var humanMessage = JSON.parse(JSON.stringify(message));
        humanMessage.text = convertFromYodaText(humanMessage.text);
        humanMessages.push(humanMessage);
    } else {
        // HUMAN
        humanMessages.push(message);
        var yodaMessage = JSON.parse(JSON.stringify(message));
        yodaMessage.text = convertToYodaText(yodaMessage.text);
        yodaMessages.push(yodaMessage);
    }
    res.end();
});
router.delete('/messages', function (req, res) {
    yodaMessages = [];
    humanMessages = [];
    res.end()
});

app.use('/', router);


/**
 * Get port from environment and store in Express.
 */

var port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

/**
 * Create HTTP server.
 */

var server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */

server.listen(port);
server.on('error', onError);
server.on('listening', onListening);

/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val) {
    var port = parseInt(val, 10);

    if (isNaN(port)) {
        // named pipe
        return val;
    }

    if (port >= 0) {
        // port number
        return port;
    }

    return false;
}

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error) {
    if (error.syscall !== 'listen') {
        throw error;
    }

    var bind = typeof port === 'string'
        ? 'Pipe ' + port
        : 'Port ' + port;

    // handle specific listen errors with friendly messages
    switch (error.code) {
        case 'EACCES':
            console.error(bind + ' requires elevated privileges');
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(bind + ' is already in use');
            process.exit(1);
            break;
        default:
            throw error;
    }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
    var addr = server.address();
    var bind = typeof addr === 'string'
        ? 'pipe ' + addr
        : 'port ' + addr.port;
    debug('Listening on ' + bind);
}

console.log('Backend server started successfully on port ' + port);