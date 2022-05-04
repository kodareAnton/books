var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);


// skriver ut i routern bökerna i JSON format
app.get('/books', function(req, res){
    res.send(
        Books = [
        {
            title: 'Liftarens guide till galaxen',
            author: 'Douglas Adams',
            pages: 500,
            rented: false,
            bookId: 1
        },
        {
            title: 'Allt eller inget',
            author: 'Jenny Höök',
            pages: 1000,
            rented: false,
            bookId: 2
        },
        {
            title: 'Spionen på FRA',
            author: 'Anders jallai',
            pages: 200,
            rented: false,
            bookId: 3
        }
    ])
});

// Printa ut ett formulär
app.get('/form', function(req, res){

    let printForm = `<h1> formulär </h1> </br>
                    <form action="saveuser" method='post'>skriv ditt namn!<br>
                    <input type='text' name='userName'>
                    <button>skicka</button></form>
    `
    res.send(printForm)
});

// spara från formulär
app.post('/saveuser', function(req,res){
    res.send('Användare' + ' ' + req.body.userName)
    console.log(req.body.userName);
});

app.get('/json', function(req, res){
    let users = [{userName: 'Anton', lastName: 'Torkkeli'}, {userName: 'Jenny', lastName: 'Höök'}]
    res.json(users)
})


// skriver ut i routern books/:bookId lite HTML
app.get('/books/:bookId', function(req, res){
    let showBook = req.params.bookId
    res.send('bok id' + ' ' +  showBook)
});

app.get('/test', function(req, res){
    res.sendFile('public/test.html', {root:__dirname});
})


module.exports = app;
