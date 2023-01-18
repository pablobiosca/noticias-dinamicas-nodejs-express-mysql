const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render("news/news",{title:"hola desde news"});
});

module.exports = router;
