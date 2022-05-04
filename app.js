// import { Books } from 'books.js';

var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var booksRouter = require('./routes/books');
const req = require('express/lib/request');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/books',booksRouter);


// Printa ut ett formulär
app.get('/form', function(req, res){

    let printForm = `<h1>User formulär</h1></br>
                    <form action="saveuser" method='post'>skriv ditt namn!<br>
                    <input type='text' name='userName'><br>
                    <p>skriv ditt Efternamn!</p><br>
                    <input type='text' name='lastName'>
                    <button>skicka</button></form>

                    <h1>Lägg till bok</h1></br>
                    <form action="saveBook" method='post'>Bokens namn!<br>
                    <input type='text' name='bookName'><br>
                    <p>skriv ditt Efternamn!</p><br>
                    <input type='text' name='author'>
                    <button>skicka</button></form>
    `
    res.send(printForm)
});

// spara formulär user
app.post('/saveuser', function(req, res){

    let users = [{
        userName: 'Anton',
        lastName: 'Tj'
    }]
    let saker = 4
    res.send( users +  ' ' + saker +  ' ' + req.body.userName + ' ' + req.body.lastName)
});
// spara formulär books
app.post('/saveBook', function(req, res){
    res.send('bok' + ' ' + req.body.bookName + req.body.author);
})













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
