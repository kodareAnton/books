var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next){
res.send('User root')
});

router.get('/add', function(req, res){
  res.send('add newUser')
});



module.exports = router;