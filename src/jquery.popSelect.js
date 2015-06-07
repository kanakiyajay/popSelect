/*
	jQuery tagEditor v1.0.15
   Copyright (c) 2015 Jay Kanakiya
   GitHub: https://github.com/kanakiyajay/popSelect
	License: http://www.opensource.org/licenses/mit-license.php
*/
;(function ( $, window, document, undefined ) {

	"use strict";

		// Create the defaults once
		var pluginName = "popSelect",
				defaults = {
					title: "Select Multiple Options",
					debug: false
				};

		// The actual plugin constructor
		function Plugin ( element, options ) {
				this.element = element;
				// jQuery has an extend method which merges the contents of two or
				// more objects, storing the result in the first object. The first object
				// is generally empty as we don't want to alter the default options for
				// future instances of the plugin
				this.settings = $.extend( {}, defaults, options );
				this._defaults = defaults;
				this._name = pluginName;
				this.init();
		}

		// Avoid Plugin.prototype conflicts
		$.extend(Plugin.prototype, {
				init: function () {
					var $this = this;
					this.$elem = $(this.element);

					// Get all the options in an array
					this.$options = this.$elem.children('option').map(function(i, option) {
						return {
							val: $(option).val(),
							text: $(option).text()
						};
					});

					// Wrap the whole input box in your own popover
					this.$elem.wrap('<div class="popover-select-wrapper"></div>');

					var elemPos = this.getPosition(this.$elem);
					this.elemPos = elemPos;

					// Also Add the required css Properties
					this.$elem.parent('.popover-select-wrapper').css({ width: elemPos.width, height: elemPos.height});

					// Clear the input list
					this.$elem.empty();

					// Append the popover to $elem
					this.$elem.after(this.generatePopover(this.$options));

					// Assign the $popover to the new $elem
					this.$popover = this.$elem.next('.popover-select');
					// this.$popover.css({ top: 0, left: 0, display: 'block' });
					this.$popover.css({ top: 0, left: 0 });

					// Change
					this.changePosition();

					// Append Tagging System to it
					this.$elem.after('<div class="popover-tag-wrapper">\
						<textarea class="popover-select-textarea form-control"></textarea>\
						<ul class="popover-select-tags">\
						</ul>\
						</div>');

					// Get the input
					this.$inputTagField = this.$elem.next('.popover-tag-wrapper').find('.popover-select-textarea');

					// Also Assign Focus Handler to the new input form field
					/*
					this.$inputTagField.on('focus', function() {
						$this.$popover.show();
						$this.changePosition();
						$this.setPlaceholder();
					});
					*/

					this.$inputTagField.on('blur', function() {
						$this.$popover.hide();
					});

					// Get the tagging wrapper
					this.$tags = this.$elem.next('.popover-tag-wrapper').find('.popover-select-tags');

					this.$tags.on('click', function() {
						$this.$popover.show();
						$this.changePosition();
						$this.setPlaceholder();
						$this.focus();
					});

					// Attach Event Listener to ul list
					this.$tags.on('click', 'popSelect-close', function() {
						var $li = $(this).parent();
						var val = $li.attr('data-value');
						var text = $li.attr('data-text');
						// Remove them from input and add it to popover
						console.log($li);
						return false;
					});

					// Attach List Event Handlers to Li
					this.$popover.find('.popover-select-list').on('mousedown', function(e) {
						e.preventDefault();
					}).on('click', 'li', function() {
						var val = $(this).attr('data-value');
						var text = $(this).text();
						var li = '<li class="tag" data-value="' + val + '" data-text="' + text + '"><span class="close popSelect-close">&times;</span>' + text + '</li>';

						// Remove them from popover and it to input
						$this.$tags.append(li);
						$this.setPlaceholder();
						$this.focus();
						$(this).remove();

						// Change Position as well show popover
						$this.$popover.show();
						$this.changePosition();
					});

					// Finally Hide the Element
					this.$elem.hide();
				},
				focus: function() {
					this.$tags.find('.placeholder input').focus();
				},
				setPlaceholder: function() {
					if (this.$tags.children('.placeholder').length) {
						this.$tags.children('.placeholder').remove();
					}
					this.$tags.append('<li class="placeholder"><div><input type="text"></div></li>');
				},
				setTitle: function(title) {
					this.$popover.find('.popover-select-title').text(title);
				},
				getPosition: function ($element) {
					$element   = $element || this.$element;

					var el     = $element[0];
					var isBody = el.tagName == 'BODY';

					var elRect    = el.getBoundingClientRect();
					if (elRect.width == null) {
						elRect = $.extend({}, elRect, { width: elRect.right - elRect.left, height: elRect.bottom - elRect.top });
					}
					var elOffset  = isBody ? { top: 0, left: 0 } : $element.offset();
					var scroll    = { scroll: isBody ? document.documentElement.scrollTop || document.body.scrollTop : $element.scrollTop() }
					var outerDims = isBody ? { width: $(window).width(), height: $(window).height() } : null;

					return $.extend({}, elRect, scroll, outerDims, elOffset);
				},
				generatePopover: function(options) {
					var list = '';
					for (var i = 0; i < options.length; i++) {
						list += '<li data-value="' + options[i].val + '">' + options[i].text + '</li>';
					}
					return '<div class="popover-select top">\
										<h3 class="popover-select-title">Select Any Option</h3>\
										<div class="popover-select-body">\
											<ul class="popover-select-list">\
											' + list + '\
											</ul>\
										</div>\
										<div class="arrow"></div>\
									</div>';
				},
				changePosition: function() {
					// It first needs to be placed
					var popPos = this.getPosition(this.$popover);

					var leftOffset = (this.elemPos.width / 2) - (popPos.width / 2) ;
					var topOffset = - (popPos.height);

					this.log('position changed', topOffset, leftOffset);
					this.$popover.css({ top: topOffset, left: leftOffset});
				},
				log: function() {
					if (this.settings.debug) {
						console.log.apply(console, arguments);
					}
				}
		});

		// A really lightweight plugin wrapper around the constructor,
		// preventing against multiple instantiations
		$.fn["popSelect"] = function (options) {
				return this.each(function() {
						if ( !$.data( this, "plugin_" + "popSelect" ) ) {
								$.data( this, "plugin_" + "popSelect", new Plugin( this, options ) );
						}
				});
		};

})( jQuery, window, document );
