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
	'underscore',
	'backbone',
	'marionette',
	'views/appLayoutView',
	'views/view'],

function($, _, Backbone, Marionette, AppLayoutView, View){

	var appLayoutView = new AppLayoutView(),
		application;

	appLayoutView.render();

	var	Router = Backbone.Marionette.AppRouter.extend({
		initialize: function(e){
			application = e;
		},
		routes: {
			'': 'home',
			'next' : 'test'
		},
		'home' : function(){
			var view = new View();
			view.model = {
				test : 'yesy'
			};
  			appLayoutView.mains.show(view);
		},
		test: function(){
			var view = new View();
			view.model = {
				test : 'test'
			};
  			appLayoutView.mains.show(view);
		}

	});

	return new Router;
});