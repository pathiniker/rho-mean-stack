const router = require('express').Router();
const Person = require('../models/person');

router.get('/', function(req, res){
  // dataFromTheDatabase is the list of documents that match the query
  // all the people in the database
  Person.find({}).then(function(dataFromTheDatabase){
    console.log('Documents from mongo', dataFromTheDatabase);
    res.send(dataFromTheDatabase);
  });
});

router.post('/', function(req, res){
  var name = req.body.name;
  var hometown = req.body.hometown;
  var movie = req.body.movie;
  console.log('name', name);
  console.log('hometown', hometown);
  console.log('movie', movie);
  var personToSave = new Person({name: name, hometown: hometown, movie: movie});
  personToSave.save().then(function(){
    console.log('saved a new person');
    res.send(201);
  });
});


module.exports = router;
