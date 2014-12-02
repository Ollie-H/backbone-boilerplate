/**
*   @package        Router.js
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
	'views/view'],

function($, Backbone, _, View){

	var Router = Backbone.Router.extend({

		routes: {
			'': 'home',
		},
		'home' : function(){

			var view = new View();
  			view.render();

		}

	});

	return new Router;
});