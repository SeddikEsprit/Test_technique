var express = require('express');
var router = express.Router();
var Pokemon=require("../models/pokemon");



/* [GET] /  -> returns list of pokemon names */
router.get('/', async function(req, res, next) {
  try {
  var pokemon= await Pokemon.find()
    var pokemonNames=[]
    for (i of pokemon){
      pokemonNames.push(i.name)
    }
    res.send(pokemonNames)
    console.log(pokemonNames)
  } catch (err) {
    res.status(400).json({ message: err.message })
  }

});

/* [GET] /?pokemonName -> returns image, element type, spawn chance*/
router.get('/:pokemonName', async function(req, res, next) {
  try {
    var pokemon= await Pokemon.find({name:req.params.pokemonName})

    res.send([pokemon[0].img,pokemon[0].type,pokemon[0].spawn_chance])
  } catch (err) {
    res.status(400).json({ message: err.message })
  }

});

/* [GET] /weak/?typeName -> returns all pokemons that are week to those element type */
router.get('/weak/:typeName', async function(req, res, next) {
  try {
    var pokemon= await Pokemon.find({weaknesses:req.params.typeName})

    res.send(pokemon)
  } catch (err) {
    res.status(400).json({ message: err.message })
  }

});

/* [GET] /strong/?typeName -> returns all pokemons that are strong to those element type */
router.get('/strong/:typeName', async function(req, res, next) {
  try {
    var pokemon= await Pokemon.find({weaknesses:{$nin:[req.params.typeName]}})

    res.send(pokemon)
  } catch (err) {
    res.status(400).json({ message: err.message })
  }

});


/* [POST] /figth/ BODY:{myPokemon:string, enemyPokemon:string} -> returns win / draw / lose */
router.post('/fight', async function(req, res, next) {var enemyPokemeonName=req.body.enemyPokemon
  try {
    var myPokemon= await Pokemon.find({name:req.body.myPokemon})
    var enemyPokemon= await Pokemon.find({name:req.body.enemyPokemon})
    console.log(myPokemon)
    if((myPokemon[0].weaknesses.length)<(enemyPokemon[0].weaknesses.length)){
      res.send("mypokemon : "+req.body.myPokemon+"   win")
    }else
      if((myPokemon[0].weaknesses.length)>(enemyPokemon[0].weaknesses.length)){
        res.send("mypokemon : "+req.body.myPokemon+"   lose")
    }else
    {
      res.send("mypokemon : "+req.body.myPokemon+" is equal to  "+req.body.enemyPokemon)
      }

  } catch (err) {
    res.status(400).json({ message: err.message })
  }

});





module.exports = router;
