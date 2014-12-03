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
		'underscore',
		'backbone',
		'marionette',
		'templates'],
function($, _, Backbone, Marionette, template){

	var that,
	View = Backbone.View.extend({

		initialize: function(e){
			console.log(e);
			that = this;
			this.render();
		},

		render : function(){

			var html = _.template(template.template());
			that.$el.html(html);

		},

		events: {
	     	/* Events go in here */
	    }

	});

	return View;

});