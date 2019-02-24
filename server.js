const port = '8100';
const http = require('http');
const ejs = require('ejs');
const bodyParser = require('body-parser');
const express = require('express');

const app = express();

app.use('/', express.static(__dirname + '/dist/Hackathon'));
app.set('views', __dirname + '/dist/Hackathon'); // Set views (index.html) to root directory
app.engine('html', ejs.renderFile); // Default for express is Jade as the rendering engine. Change that to EJS for HTML over JADE
app.use(bodyParser.json()); // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({ // to support URL-encoded bodies
    extended: true,
    limit: '1000mb'
}));

// Receive and process Twilio responses - GET
app.get('/login', (req, res) => {
    console.log(req.query.email, req.query.password);
    res.write('Success');
    res.end();
});

http.createServer(app).listen(port, () => {
    console.log('Express server listening on port: ' + port);
});
