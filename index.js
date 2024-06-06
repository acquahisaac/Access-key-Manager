const logger = require('./logger/logger'); // Import the logger

// Override console.log to use Winston
console.log = function(...args) {
  logger.info(args.join(' '));
};

console.error = function(...args) {
  logger.error(args.join(' '));
};

const express = require('express');
const app = express();
const port = 3000;
var bodyParser = require('body-parser')
const authController = require('./controllers/auth/login');
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

// Set EJS as templating engine
app.set('view engine', 'ejs');

// Define the default views directory
app.set('views', __dirname + '/views');

//controller
app.set('controllers', __dirname + '/controllers');

app.get('/', authController.login);

app.post('/login' ,authController.authenticateUser);

app.listen(port, () => {
  console.log(`app is running on port ${port}`);
});
