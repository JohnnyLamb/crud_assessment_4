var express = require('express');
var router = express.Router();
var Lobster = require('../models/lobsters');

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
// get ALL lobsters
// route to create lobster
router.get('/lobsters', function(req, res, next) {
  Lobster.find(function(err,data){
    if(err) {
      res.json({
        'message':err
      });
    } else {
      res.json(data);
    }
  });
});

// route to create lobster
router.post('/lobsters', function(req, res, next) {
  newLobster = new Lobster({
    name: req.body.name,
    hobbies: req.body.hobbies
  });
  newLobster.save(function(err,data){
    if(err) {
      res.json({
        'message':err
      });
    } else {
      res.json(data);
    }
  });
});








module.exports = router;
