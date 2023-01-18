const express = require('express');

const router = express.Router();

const mysql = require("../config/dbconnection")

/* GET users listing. */
router.get('/', function(req, res, next) {

  const connection = mysql()
  connection.query("select * from news",(error,resul) =>{


    res.render("news/news",{news:resul});
    console.log(resul)
  })

});

module.exports = router;
