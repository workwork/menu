var express = require('express');
var router = express.Router();


router.get('/', function(req, res) {
	menuItems = [{name: "Hansa Pils", price: "69"},
		{name: "Hansa Bayer", price: "72"},
		{name: "Hansa IPA", price: "72"},
		{name: "Clausthaler", price: "46"},
		{name: "Brus", price: "46"},
		{name: "Nøtter/Chips", price: "36"},
		{name: "Kaffe", price: "29"},
		{name: "Cookie/Muffin", price: "25"},
		{name: "Vin (glass)", price: "76"},
		{name: "Flipper Token X1", price: "20"},
		{name: "Flipper Token X3", price: "50"},
		{name: "Flipper Token X7", price: "100"},
		{name: "Shuffle minutt", price: "4"},
		{name: "Flaskeøl fra", price: "79"},
		{name: "Love Potion", price: "99"},
		{name: "Mana Potion", price: "99"},
		{name: "Health Potion", price: "99"},
		{name: "Courage Potion", price: "99"},
		{name: "Hulk Smash", price: "99"},
		{name: "Kaffe", price: "29"},
		{name: "Kaffe", price: "29"},
		{name: "Kaffe", price: "29"},
		{name: "Kaffe", price: "29"},
		{name: "Kaffe", price: "29"},
		{name: "Kaffe", price: "29"},
		{name: "Kaffe", price: "29"},
		{name: "Kaffe", price: "29"},
		{name: "Kaffe", price: "29"},
		{name: "Kaffe", price: "29"},
{name: "Kaffe", price: "29"}]

	res.render('index', { title: 'Work-Work Menu', menuItems: menuItems});
});

module.exports = router;
