var express = require('express');
const path = require('path');
var app = express();

// Set up the view engine and views folder
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files from the 'public' folder (for CSS, JS, etc.)
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
            script: 'TanishaZaman_GuessTheNumber.py',
            code: `import random\nnum = random.randint(1,100)\n\nwhile True:\n    guess = int(input("Guess the number: "))\n    if guess < num:\n        print("This guess is too low!")\n    elif guess > num:\n        print("This guess is too high!")\n    else:\n        print("Correct!", num, "is the right answer!")\n        break`
        },
        {
            name: 'Calculator',
            description: 'A Python script for a simple calculator that supports basic operations.',
            script: 'TanishaZaman_Calculator.py',
            code: `old_result = 0\noperation_line = """\nHere are the available inputs:\nFor addition: '+' or 'add' or 'plus'\nFor subtraction: '-' or 'subtract' or 'minus'\nFor multiplication: '*' or 'times' or 'multiply'\nFor division: '/' or 'divide'\nFor exponents: '**' or 'raise' or 'exponent'\nTo exit: 'stop' or 'exit'\n"""\n\nwhile True:\n    num1 = input("Please enter first number: ")\n    if num1 in ['exit', 'stop']:\n        print("Goodbye!")\n        break\n    print(operation_line)\n    opp = input("Please enter the operation name or symbol: ")\n    if opp in ['exit', 'stop']:\n        print("Goodbye!")\n        break\n    num2 = input("Please enter second number: ")\n    if num2 in ['exit', 'stop']:\n        print("Goodbye!")\n        break\n    num1 = int(num1)\n    num2 = int(num2)\n    result = num1 + num2\n    print("The sum of", num1, 'and', num2, 'is', float(result))`
        }
    ];

    res.render('projects', { title: 'My Python Projects', projects });
});


// Start the server
app.listen(3000, function() {
    console.log('Server is running on port 3000');
});
