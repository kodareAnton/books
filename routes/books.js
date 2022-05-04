var express = require('express');
var router = express.Router();

/* GET Book Page. */
router.get('/', function(req, res) {
  res.send(`<div action="saveBook" method='post' ><h1>title</h1>
  <button> Låna bok </button></div>
  `
  );

  router.post('/saveBook', function(req, res){
    res.send('hejsan' + ' ')
  })

});

module.exports = router;
