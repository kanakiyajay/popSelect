# [PopSelect jQuery  plugin](http://jquer.in/popSelect/)

![select popovers](img/popSelect.jpg)

### A simple to use jQuery plugin to create popover boxes over select input tags. A radically new way to select multiselect.

## Basic Usage

1. Include jQuery:

	```html
	<script src="http://ajax.googleapis.com/ajax/libs/jquery/2.0.0/jquery.min.js"></script>
	```

2. Install popSelect using bower or directly from git.

	`bower install popSelect`

	or

	`npm install popselect`

	or

	[download](https://github.com/kanakiyajay/popSelect/archive/master.zip)

3. Include plugin's js code:

	```html
	<link rel="stylesheet" href="css/popSelect.css">
	<script src="js/jquery.popSelect.min.js"></script>
	```

4. Call the plugin:

	Conside the following select tag.

	```html
	<select class="form-control" name="city" id="element" multiple>
		<option value="green">Green</option>
		<option value="red">Red</option>
		<option value="blue">Blue</option>
		<option value="violet">Violet</option>
		<option value="orange">Orange</option>
		<option value="white" selected="selected">White</option>
	</select>
	```

	```javascript
	$(function() {
		$("#myselect").popSelect({
			showTitle: false,
			maxAllowed: 4
		});
	});
	```

## [Examples](http://jquer.in/popSelect/ "popSelect jQuery plugin")

## [Options](http://jquer.in/popSelect/ "popSelect jQuery plugin")

## TODO

- [x] Add support for setting selected='selected' inside multiple select
- [x] Add support for autofocus option for the select.
- [x] Add support for initial selected values
- [x] Add option for general placeholder.
- [x] Add support for getting value from select.
- [x] Add support for backspace delete
- [x] Add support for multidirectional popovers.
- [x] Auto-growing textarea
- [x] Add Support for setting maxAllowed input tags
- [ ] Add support for populating the values from a different source
- [ ] Add support for easy theming.
- [ ] Add Sorting Options
- [ ] Better Touch Handling

## License

[MIT License](http://mit-license.org/) © Jay Kanakiya
