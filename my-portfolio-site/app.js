const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// Set EJS as the templating engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views')); // Set the views directory

// Serve static files (like CSS and images) from the public directory
app.use(express.static(path.join(__dirname, 'public')));

// Define routes
app.get('/', (req, res) => {
  res.render('home');  // Renders the home.ejs file
});

app.get('/about', (req, res) => {
  res.render('about'); // Renders the about.ejs file
});

app.get('/projects', (req, res) => {
  res.render('projects'); // Renders the projects.ejs file
});

app.get('/contact', (req, res) => {
  res.render('contact'); // Renders the contact.ejs file
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
