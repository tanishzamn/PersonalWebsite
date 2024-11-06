var express = require('express');
const path = require('path');
var app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use('/files', express.static(path.join(__dirname, 'public', 'scripts')));

// Home Page
app.get('/', function(req, res) { 
    res.render('home', { title: 'Home' }); 
});

// About Me Page
app.get('/about', function(req, res) { 
    res.render('about', { title: 'About Me' }); 
});

// Contact Me Page
app.get('/contact', function(req, res) { 
    res.render('contact', { title: 'Contact Me' }); 
});

// Projects Page
app.get('/projects', (req, res) => {
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

// Start the server
app.listen(3000, function() {
    console.log('Server is running on port 3000');
});
