var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { path: req.path, title: 'Yiwen Zhang | Experience Designer & Developer' });
});

router.get('/projects/paperplane', function(req, res, next) {
  res.render('paperplane', {path: req.path, title: 'Paper Plane | Yiwen Zhang' });
})

router.get('/projects/pandafan', function(req, res, next) {
  res.render('pandafan', {path: req.path, title: 'PandaFan Dashboard Re-design | Yiwen Zhang' });
})

router.get('/projects/chinese', function(req, res, next) {
  res.render('chinese', {path: req.path, title: 'Designing and prototyping liquid typography in theater | Yiwen Zhang' });
})

router.get('/projects/pigeonlab', function(req, res, next) {
  res.render('pigeonlab', {path: req.path, title: 'Designing and developing a branding generation tool with high usability | Yiwen Zhang' });
})


router.get('/skills', function(req, res, next) {
  res.render('skills', {path: req.path, title: ' Skills | Yiwen Zhang' });
})

router.get('/about', function(req, res, next) {
  res.render('about', {path: req.path, title: 'About Me | Yiwen Zhang' });
})

router.get('/contact', function(req, res, next) {
  res.render('contact', {path: req.path, title: 'Contact | Yiwen Zhang' });
})


module.exports = router;
