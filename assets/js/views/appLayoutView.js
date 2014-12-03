/**
*   @package        AppLayoutView.js
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
  		'templates',
], function($, _, Backbone, Marionette, template){

	var that,
		AppLayoutView = Backbone.Marionette.LayoutView.extend({

			el: "#application",

			template: template.appLayout(),

			regions: {
				header: "#header",
				mains:  "#main",
				footer: "#footer"
			},

			initialize: function(){
				that = this;
			},

			render: function(){

				that.$el.html(that.template);

			}

		});

	return AppLayoutView;

});