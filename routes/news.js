const express = require('express');

const router = express.Router();

const mysql = require("../config/dbconnection")

/* GET users listing. */
router.get('/', function(req, res, next) {

  console.log("querys : ",req.query)

  const botones = {"atras":true,"siguiente":true}

  let limite = req.query.new-1

  if (!limite || limite <0){

    botones["atras"] = false

    limite=0
  }

  console.log(limite)

  const connection = mysql()

  connection.query('select id_news from news order by id_news desc limit 1;',(e,r)=>{

    let ultimo_valor = r[0].id_news

    console.log(limite,ultimo_valor)

    //comprobante para el boton siguiente si hay exceso
    if (limite >= ultimo_valor){
      console.log("es mayor")
      limite = ultimo_valor-5

      botones["siguiente"] = false
    }

    if (limite + 5 >= ultimo_valor){
      botones["siguiente"] = false
    }

    console.log(botones)
    connection.query(`select * from news limit ${limite},5`,(error,resul) =>{
  
      console.log("tamos en primera consulta")
  
      // if (error){ 
      //   console.log("se produjo un erroe")
      //   resul = connection.query( "select * from news order by id_news desc limit 5;",( error_subquery,resultado_subquery )=>{
      //     resul = resultado_subquery-5
      //     console.log("se ha pedido mucho")
      //   })
      // }
  
      console.log("resultados : ",resul)
  
      res.render("news/news",{news:resul,botones:botones});
    })
  });
})

  // console.log("el limite vale aqui : ",limite)
  //order by id_news desc

router.post('/', function(req, res, next) {

  console.log(req.body)
  const {title,news} = req.body


  const connection = mysql()

  connection.query("insert into news set ?",{title,news},(error,results)=>{
    console.log(results)
    res.redirect("/news")
  })


});


module.exports = router;
