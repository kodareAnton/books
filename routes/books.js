var express = require('express');
var router = express.Router();

// fejk books database
let Books = [
    {
        title: 'Liftarens guide till galaxen',
        author: 'Douglas Adams',
        pages: 500,
        rented: false,
        bookId: 1,
        imageUrl: 'https://s2.adlibris.com/images/54093299/liftarens-guide-till-galaxen.jpg'
    },
    {
        title: 'Allt eller inget',
        author: 'Jenny Höök',
        pages: 1000,
        rented: false,
        bookId: 2,
        imageUrl: ''
    },
    {
        title: 'Spionen på FRA!',
        author: 'Anders jallai',
        pages: 200,
        rented: false,
        bookId: 3,
        imageUrl: 'https://s2.adlibris.com/images/13143067/spionen-pa-fra-20.jpg'
    }
]

  // skriver ut i routern bökerna i JSON format
router.get('/', function(req, res){

    // const titles = Books.map((book) => ({
    //     title: book.title,
    //     author: book.author,
    //     pages: book.pages,
    //     rented: book.rented,
    //     bookId: book.bookId,
    //     imageUrl: book.imageUrl
    // }));

    

    // försök med for loop
        for(let i = 0; i < Books.length; i++){
            const printBooks = `
            <h1> ${Books[0].title}</h1> <p>${Books[0].author}</p> <p>${Books[0].pages}</p><img src="${Books[0].imageUrl}" alt="${Books[0].title}" ></img> <br><button>Låna</button>
            <h1> ${Books[1].title}</h1> <p>${Books[1].author}</p> <p>${Books[1].pages}</p> <img src="${Books[1].imageUrl}" alt="${Books[1].title}" ></img> <br> <button>Låna</button>
            <h1> ${Books[2].title}</h1> <p>${Books[2].author}</p> <p>${Books[2].pages}</p> <img src="${Books[2].imageUrl}" alt="${Books[2].title}" ></img> <br> <button>Låna</button>
            `
 res.send(printBooks)
        }
});

// use javascript find function, to fin book with specific id
router.get('/:id', function(req, res){
    console.log(req.params.id);

    const find = Books.find(({bookId}) => bookId >= req.params.id)
    let strukture = `<h1>${find.title}</h1><h2> ${find.author} </h2> <img src="${find.imageUrl}" alt="${find.title}"> </img> <p> ${find.pages} </p> <p> ${find.rented} </p>`

    res.send(strukture)
   });
   

module.exports = router;
