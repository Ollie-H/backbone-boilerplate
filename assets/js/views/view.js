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

		template: template,

		initialize: function(e){
			that = this;
		},

		render : function(){

			that.$el.html(that.template.template(that.model));

		},

		events: {
	     	/* Events go in here */
	    }

	});

	return View;

});