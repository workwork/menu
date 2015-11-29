#Work-Work Menu
This is the menu system used at the Work-Work bar to show what items we have available for sale.

##Creating a new theme
If you want to create a new theme, you need to do the following. 

###1. Add a new route to `./routes/index.js`.

```javascript
//...

router.get('/mynewtheme', function(req, res) {
	res.render('mynewtheme', { menuItems: menuItems}); 
});

//...

```

The "menuItems" object contains a list of all menu items available. It's format is `[{name: "item1", price: "12"}, {name: "item2", price: "12"}, ...]`

###2. Create `./views/mynewtheme.jade`

This is where the html file is generated using [`jade`](http://jade-lang.com/).

To create a simple list of all the menu items with their prices.

```
ul
	for item in menuItems
		li=item.name
			span(style="float: right;") #{item.price},-

###3. (optional) Create `./public/css/mynewtheme.scss`

Put all of you [`scss`](http://sass-lang.com/guide) styles within this file.


##License
MIT