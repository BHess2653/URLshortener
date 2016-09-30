const express = require('express');
const body_parser = require('body-parser');
const app = express();

// Port set to 3000
const port = 3000;

app.use(body_parser.urlencoded({ extended: true }));
app.use(body_parser.json());
app.use('/api/v1', require('./routes/urlAPI')(express));

app.listen(port, () => {
  console.log('Server Active on ', port);
});
// const server = app.listen(port);
