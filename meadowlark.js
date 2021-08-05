const express = require('express');
const app = express();
const expressHandlebars = require('express-handlebars');

//Internal library
const handlers = require('./lib/handlers');

// Config handlebar templating engine to the web app
app.engine('handlebars', expressHandlebars({
    defaultLayout: 'main',
}));
app.set('view engine','handlebars');

// Adding public directory for serving stati media such as html, css and image
app.use(express.static(__dirname + '/public'));

//Adding route with get method 

// Home Page route
app.get('/', handlers.home);

//About page route
app.get('/about',handlers.about)


// Custome 404 not found page
app.use(handlers.notFound );

// Custom 500 Internal server error
app.use( handlers.serverError);

const PORT = process.env.PORT || 3000;

app.listen(PORT, ()=>{console.log(`Listening to port ${PORT}....`)});   
