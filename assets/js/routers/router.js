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
	'cookies',
	'underscore',
	'backbone',
	'marionette',
	'models/uiModel',
	'views/appLayoutView',
	'views/headerView',
	'views/footerView',
	'views/welcomeView',
	'views/stepOneView',

], function($, cookies, _, Backbone, Marionette, UiModel, AppLayoutView, Header, Footer, WelcomeView, StepOne){

	var that,
		cachedUi = null,
		appLayoutView = new AppLayoutView(),
		application;
 
	appLayoutView.render();

	var	Router = Backbone.Marionette.AppRouter.extend({
		initialize: function(e){
			that = this;
			// Set application locally
			application = e;
		},
		getUi: function(){

			var promise = cachedUi;
		    if (!promise) {
		        promise = new UiModel().fetch({
		        	success: function(resp){
		        		cachedUi = resp; 
		        	}
		        });
		    }
		    return promise;
		},
		routes: {
			'': 'welcome',
			'stepOne' : 'stepOne'
		},
		'welcome' : function(){

			$.when(that.getUi()).then(function(resp){
				appLayoutView.mains.show(new WelcomeView({ui : resp}));
	  			appLayoutView.header.show(new Header());
		    	appLayoutView.footer.show(new Footer());
		    });

		},
		stepOne: function(){

			$.when(that.getUi()).then(function(resp){
				appLayoutView.mains.show( new StepOne({ui : resp}) );
	  			appLayoutView.header.show(new Header());
		    	appLayoutView.footer.show(new Footer());
		    });
			

		}

	});

	return new Router;
});





