/**
*   @package        View.js
*   @subpackage     Javascript
*   @author         Ollie Husband
*   @copyright      Copyright 2014, Saatchi & Saatchi.
*   @version        1.0
*
************************************************************************************************************************ **/

define([
		'jquery', 
		'backbone',
		'underscore',
		'text!templates/template.html'],
function($, Backbone, _, template){

	var that,
	View = Backbone.View.extend({

		el : $("#main"),

		template : template,

		initialize: function(){

			that = this;

		},

		render : function(){

			var template = _.template( that.template );
			that.$el.html(template);

		},

		events: {
	     	/* Events go in here */
	    }

	});

	return View;

});