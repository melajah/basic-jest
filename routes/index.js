const express = require('express');
const router = express.Router();
const { Todo } = require('../models');

router.get('/todos', function (req, res, next) { 
  Todo
    .findAll()
    .then(todos => {
      res.status(200).json(todos)
    })
    .catch(next)
})

router.post('/todos', function (req, res, next) {
  Todo  
    .create(req.body)
    .then(todo => {
      console.log('sampe sini')
      res.status(201).json(todo)
    })
    .catch(next)
})













/* GET home page. */
router.get('/', function(req, res, next) {
  res.json("hello world")
});


module.exports = router;
