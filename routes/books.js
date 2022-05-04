import { Library } from '../Library';

var express = require('express');
var router = express.Router();

/* GET Book Page. */
router.get('/', function(req, res) {
  res.send(`<h1>Hej hallå</h1>
  <button> Låna bok </button>
  
  `);
});

module.exports = router;
