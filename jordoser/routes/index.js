var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/facebook', function(req, res) {
    res.redirect('https://www.facebook.com/jordan.service.9');
});

router.get('/git', function(req, res){
	res.redirect('https://github.com/Jordoser');
});

router.get('/twitter', function(req, res){
	res.redirect('https://twitter.com/Jordoser');
});
module.exports = router;
