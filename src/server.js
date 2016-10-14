const utool2 = require('uTool2');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// Port set to 3000
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true,
}));

app.use('/', require('./routes')(express));

const server = app.listen(port, () => {
  utool2.debug('Server Active on port ', port);
});

module.exports = server;
