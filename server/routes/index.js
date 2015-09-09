var express = require('express');
var router = express.Router();
var Lobster = require('../models/lobsters');

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
// GET ALL lobsters
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
// GET single lobster
router.get('/lobster/:id', function(req, res, next) {
  Lobster.findById(req.params.id,function(err,data){
    if(err) {
      res.json({
        'message':err
      });
    } else {
      res.json(data);
    }
  });
});
// POST route to create lobster
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
// put single lobster
router.put('/lobster/:id', function(req, res, next) {
  var update = {
    name: req.body.name,
    hobbies: req.body.hobbies
  };
  Lobster.findByIdAndUpdate(req.params.id, update, function(err, data) {
    if (err) {
      res.json({
        'message': err
      });
    } else {
      res.json(data);
    }
  });
});
// delete single lobster
router.delete('/lobster/:id', function(req, res, next) {
  Lobster.findByIdAndRemove(req.params.id, function(err, data) {
    if (err) {
      res.json({
        'message': err
      });
    } else {
      res.json(data);
    }
  });
});



module.exports = router;
