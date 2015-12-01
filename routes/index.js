var express = require('express');
var router = express.Router();
var fs = require('fs');

//Fetch prices and store them.
var menuItems = [];
function refreshPrices () {
	menuItems = [];
	fs.readFile('prices.prices', 'utf8', function (err,data) {

	if (err) {
		return console.log(err);
	}
	lines = data.split("\n")
	for(line in lines){
		price_data = lines[line].split(" | ")
		menuItems.push({name: price_data[0], price: price_data[1] })
	}
	console.log(menuItems);
	});
	// livereload();
}


// fs.watch('prices.prices',function (event, filename) {
// 	refreshPrices();
// });

refreshPrices();

router.get('/', function(req, res) {
	res.render('index', { title: 'Work-Work', menuItems: menuItems});
});

router.get('/starwars', function(req, res) {
	res.render('starwars', { title: 'Work-Work', menuItems: menuItems});
});


module.exports = router;
