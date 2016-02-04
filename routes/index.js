var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

/* GET about page. */
router.get('/about', function(req, res) {
  res.render('about', { title: 'About Us' });
});

/* GET project page. */
router.get('/project', function(req, res) {
  res.render('project', { title: 'Project' });
});

/* GET social page. */
router.get('/social', function(req, res) {
  res.render('social', { title: 'Social' });
});

/* GET contact page. */
router.get('/contact', function(req, res) {
  res.render('contact', { title: 'Contact Us' });
});


module.exports = router;
