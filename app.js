// WEB SERVER TEST RUNNING ON NODE.JS //

// LIBRARIES & MODULES //

const express = require('express'); // Connects Express to the project
const {engine} = require('express-handlebars'); // Connects Handlebars to the project

// Creates Express server instance
const app = express(); 


// SETTINGS & CONFIGURATION //

// TCP port configuration 

const PORT = process.env.PORT || 8080; // The server port is set to 8080 (http://localhost:8080) 

app.use(express.static('public')); // Serves static (Image files, CSS files, JavaScript files) from the public folder

app.set('views', './views'); // Sets views folder for Handlebars templates

// Handlebars engine configuration 

app.engine('handlebars', engine());

app.set('view engine', 'handlebars'); // Sets Handlebars as the default template engine

// URL ROUTES //

// URL ROUTE FOR HOMEPAGE

app.get('/', (req, res) => { // '/' is Root of page

    // Testing data for a template
    let today = 'Wednesday';
    let food = 'Pizza';

    let dataToSend = {
        'dayName': today,
        'food': food
    };

    // Render homepage
    res.render('index', dataToSend);
});

// URL ROUTE FOR ABOUT PAGE

app.get('/about', (req, res) => {
    // Testing data
    let aboutData = {
        'team': 'TIVIpt24B'
    };

    // Render about page
    res.render('about', aboutData);
});

// RUN ENGINE & LOG // 

app.listen(PORT)
console.log('Started server on port', PORT)

// node app.js // to run server
// ctrl + c // to stop server