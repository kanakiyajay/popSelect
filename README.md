# jQuery PopSelect plugin

### A simple to use jQuery plugin to create popover boxes over select input tags. A new way to select multiselect.



## Usage

1. Include jQuery:

	```html
	<script src="http://ajax.googleapis.com/ajax/libs/jquery/2.0.0/jquery.min.js"></script>
	```

2. Include plugin's js code:

	```html
	<link rel="stylesheet" href="css/popSelect.css">
	<script src="js/jquery.popSelect.min.js"></script>
	```

3. Call the plugin:

	Conside the following select tag.

	```html
	<select class="form-control" name="city" id="element">
		<option value="green">Green</option>
		<option value="red">Red</option>
		<option value="blue">Blue</option>
		<option value="violet">Violet</option>
		<option value="orange">Orange</option>
		<option value="white">White</option>
	</select>
	```

	```javascript
	$(function() {
		$("#myselect").popSelect({
			title: "Select any Colors",
			debug: true
		});
	});
	```

## Structure

The basic structure of the project is given in the following way:

```
.
├── dist
│   ├── jquery.popSelect.js
│   └── jquery.popSelect.min.js
├── bower.json
├── CONTRIBUTING.md
├── css
│   ├── libs
│   │   └── *library css
│   └── popSelect.css
├── fonts
│   └── *library fonts
├── Gruntfile.js
├── img
│   └── header.jpg
├── index.html
├── package.json
├── README.md
└── src
    ├── jquery.popSelect.js
    └── libs
        └── *library css
```

## TODO

- [ ] Add support for easy themeing.
- [x] Add support for getting value from select.
- [x] Add support for backspace delete
- [ ] Add support for multidirectional popovers.
- [ ] Auto-growing textarea
- [ ] Add Sorting Options
- [ ] Support multiple attribute in select.

#### [demo/](https://github.com/jquery-boilerplate/boilerplate/tree/master/demo)

Contains a simple HTML file to demonstrate your plugin.

#### [dist/](https://github.com/jquery-boilerplate/boilerplate/tree/master/dist)

This is where the generated files are stored once Grunt runs.

#### [src/](https://github.com/jquery-boilerplate/boilerplate/tree/master/src)

Contains the files responsible for your plugin, you can choose between JavaScript or CoffeeScript.

#### [.editorconfig](https://github.com/jquery-boilerplate/boilerplate/tree/master/.editorconfig)

This file is for unifying the coding style for different editors and IDEs.

> Check [editorconfig.org](http://editorconfig.org) if you haven't heard about this project yet.

#### [.gitignore](https://github.com/jquery-boilerplate/boilerplate/tree/master/.gitignore)

List of files that we don't want Git to track.

> Check this [Git Ignoring Files Guide](https://help.github.com/articles/ignoring-files) for more details.

#### [.jshintrc](https://github.com/jquery-boilerplate/boilerplate/tree/master/.jshintrc)

List of rules used by JSHint to detect errors and potential problems in JavaScript.

> Check [jshint.com](http://jshint.com/about/) if you haven't heard about this project yet.

#### [.travis.yml](https://github.com/jquery-boilerplate/boilerplate/tree/master/.travis.yml)

Definitions for continous integration using Travis.

> Check [travis-ci.org](http://about.travis-ci.org/) if you haven't heard about this project yet.

#### [boilerplate.jquery.json](https://github.com/jquery-boilerplate/boilerplate/tree/master/boilerplate.jquery.json)

Package manifest file used to publish plugins in jQuery Plugin Registry.

> Check this [Package Manifest Guide](http://plugins.jquery.com/docs/package-manifest/) for more details.

#### [Gruntfile.js](https://github.com/jquery-boilerplate/boilerplate/tree/master/Gruntfile.js)

Contains all automated tasks using Grunt.

> Check [gruntjs.com](http://gruntjs.com) if you haven't heard about this project yet.

#### [package.json](https://github.com/jquery-boilerplate/boilerplate/tree/master/package.json)

Specify all dependencies loaded via Node.JS.

> Check [NPM](https://npmjs.org/doc/json.html) for more details.

## Guides



## License

[MIT License](http://mit-license.org/) © Jay Kanakiya
