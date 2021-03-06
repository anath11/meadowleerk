const fortune = require('./fortune');

exports.home = (req,res) => {res.render('home')};

exports.about = (req,res) =>{ res.render('about', {fortunes: fortune.getFortune()}) }; //res.render('about', {fortunes:fortune.getFortune()});

exports.notFound = (req,res) =>{res.render('404')};

// exports.serverError = (err,req,res,next) => {res.render('500')};


// Express recognizes the error handler by way of its four
// arguments, so we have to disable ESLint's no-unused-vars rule 
/* eslint-disable no-unused-vars */
exports.serverError = (err, req, res, next) => res.render('500') 
/* eslint-enable no-unused-vars */