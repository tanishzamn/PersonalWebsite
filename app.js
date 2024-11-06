var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var createError = require('http-errors'); 

var app = express();

// Set view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Middleware
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/', function(req, res, next) { 
    res.render('home', { title: 'Home' }); 
});

app.get('/about', function(req, res, next) { 
    res.render('about', { title: 'About Me' }); 
});

app.get('/contact', function(req, res, next) { 
    res.render('contact', { title: 'Contact Me' }); 
});

app.get('/projects', (req, res, next) => {
    const projects = [
        {
            name: 'Guess the Number',
            description: 'A Python script for guessing numbers between 1 and 100.',
            script: 'GuessTheNumber.py', 
        },
        {
            name: 'Calculator',
            description: 'A Python script for a simple calculator that supports basic operations.',
            script: 'Calculator.py',
        }
    ];

    res.render('projects', { title: 'My Python Projects', projects }); 
});

// Error handling
app.use(function(req, res, next) {
  next(createError(404)); 
});

app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500);
  res.render('error'); 
});

// Start the server
var PORT = process.env.PORT || 3000;
app.listen(PORT, function() {
  console.log(`Server is running on http://localhost:${PORT}`);
});


module.exports = app;
