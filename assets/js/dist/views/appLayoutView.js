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
		AppLayoutView = Backbone.Marionette.LayoutView.extend({

			el: "#application",

			template: template,

			regions: {
				header: "#header",
				mains: "#main",
				foooter: "#footer"
			},

			initialize: function(){
				console.log('AppLayoutView init');
			},

		});

	return AppLayoutView;

});