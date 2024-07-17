const logger = require('./Logger/logger')

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
const path = require('path');
var bodyParser = require('body-parser')
const authController = require('./controllers/auth/login');
const dashboardController = require('./controllers/dashboard/home');
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

// Set EJS as templating engine
app.set('view engine', 'ejs');

// Define the default views directory
app.set('views', __dirname + '/views');

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, "public/js")));
app.use(express.static(path.join(__dirname, "public/css")));
app.use(express.static(path.join(__dirname, "public/images")));

//controller
app.set('controllers', __dirname + '/controllers');

app.get('/', authController.login);

app.post('/',authController.authenticateUser);

app.get('/dashboard/home',dashboardController.home);

app.listen(port, () => {
  console.log(`app is running on port ${port}`);
});
