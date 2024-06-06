var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Portfolio',
message: 'thanks for visiting my portfolio' });
  
});
/* GET /about => load about static view */
router.get('/contact', (req, res) => {
  res.render('contact', {
    title: 'Contact me!'
  });
});

/* GET /about => load about static view */
router.get('/skills', (req, res) => {
  res.render('skills', {
    title: 'checkout my skills!'
  });
});

/* GET /about => load about static view */
router.get('/resume', (req, res) => {
  res.render('resume', {
    title: 'Here is my Resume!'
  });
});
router.get('/about', (req, res) => {
  res.render('about', {
    title: 'About me!'
  });
});

module.exports = router;
