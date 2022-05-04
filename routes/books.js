var express = require('express');
var router = express.Router();

// /* GET Book Page. */
// router.get('/', function(req, res) {
//   res.send(`<div action="saveBook" method='post' ><h1>title</h1>
//   <button> Låna bok </button></div>
//   `
//   );

  // router.post('/saveBook', function(req, res){
  //   res.send('hejsan' + ' ')
  // })
  // skriver ut i routern bökerna i JSON format

router.get('/', function(req, res){
  let Books = [
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
         title: 'Spionen på FRA!',
         author: 'Anders jallai',
         pages: 200,
         rented: false,
         bookId: 3
     }
 ]

 res.send(Books)
});

router.post('/create', function(req, res){
 let printBook = `<h1> formulär </h1> </br>
                 <form action="saveuser" method='post'>skriv ditt namn!<br>
                 <input type='text' name='userName'>
                 <button>skicka</button></form>
 `
 res.send(printBook)

})



module.exports = router;
