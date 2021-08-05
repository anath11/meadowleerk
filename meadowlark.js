const express = require('express');
const app = express();
const expressHandlebars = require('express-handlebars');

// Config handlebar templating engine to the web app
app.engine('handlebars', expressHandlebars({
    defaultLayout: 'main',
}));
app.set('view engine','handlebars');

//Adding route with get method 

// Home Page route
app.get('/', (req,res)=>{res.render('home')});

//About page route
app.get('/about', (req,res)=>{
    const randomFortune = fortunes[Math.floor(Math.random()*fortunes.length)];    
    res.render('about', {fortunes:randomFortune});
})

// Adding public directory for serving stati media such as html, css and image
app.use(express.static(__dirname + '/public'));

// Custome 404 not found page
app.use( (req,res)=>{
    res.status(404);
    res.render('404');
} );

// Custom 500 Internal server error
app.use( (err,req,res, next) => {
    console.log(err.message);
    res.status(500);
    res.render('500');
} );

const PORT = process.env.PORT || 3000;

app.listen(PORT, ()=>{console.log(`Listening to port ${PORT}....`)});   

// Extra js functon which will be removed leater of
const fortunes = [
    "Conquer your fears or they will conquer you",
    "River never springs",
    "Do not fear what you don't know",
    "You will have a pleasent suprise",
    "Whenever possible, keep it simple"
];