// const e = require('express');
const express = require('express');
const app = express();
const expressHandlebars = require('express-handlebars');

//Internal library
const handlers = require('./lib/handlers');

// Config handlebar templating engine to the web app
app.engine('handlebars', expressHandlebars({
    defaultLayout: 'main',
    helpers: {
        section: (name,options) =>{
            if(!this._sections) this._sections ={}
            this._sections[name] = options.fn(this)
            return null
        }
    }
}));
app.set('view engine','handlebars');

// Adding public directory for serving stati media such as html, css and image
app.use(express.static(__dirname + '/public'));

//Adding route with get method 

// Home Page route
app.get('/', handlers.home);

//About page route
app.get('/about',handlers.about);

//Testing the data leaking from chrome and node
// To check what information leaks from the browser
app.get('/headers', (req,res)=>{
    res.type('text/plain');
    const headers = Object.entries(req.headers)
        .map(([key,value])=>`{key}:${value}`)
    res.send(headers.join('\n'));
});

// Disabling the leakage of server information
app.disable('x-powered-by')

// Custome 404 not found page
app.use(handlers.notFound );

// Custom 500 Internal server error
app.use( handlers.serverError);

const PORT = process.env.PORT || 3000;

if(require.main === module){
    app.listen(PORT, ()=>{console.log(`Listening to port ${PORT}....`)});   
} else {
    module.exports = app;
}
 

