var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/projects/paperplane', function(req, res, next) {
  res.render('paperplane', {path: req.path});
})

router.get('/projects/pandafan', function(req, res, next) {
  res.render('pandafan', {path: req.path});
})

router.get('/projects/chinese', function(req, res, next) {
  res.render('chinese', {path: req.path});
})

router.get('/projects/pigeonlab', function(req, res, next) {
  res.render('pigeonlab', {path: req.path});
})



module.exports = router;
