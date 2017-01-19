var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/projects/paperplane', function(req, res, next) {
  res.render('paperplane');
})

router.get('/projects/pandafan', function(req, res, next) {
  res.render('pandafan');
})

router.get('/projects/chinese', function(req, res, next) {
  res.render('chinese');
})

router.get('/projects/pigeonlab', function(req, res, next) {
  res.render('pigeonlab');
})



module.exports = router;
