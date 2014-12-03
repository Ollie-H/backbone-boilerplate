/**
*   @package        Model.js
*   @subpackage     Javascript
*   @author         Ollie Husband
*   @copyright      Copyright 2014, Saatchi & Saatchi.
*   @version        1.0
*
************************************************************************************************************************ **/

define([
	'jquery',
	'backbone',
	'marionette',
	'underscore'],
function($, Backbone, _){

	var that,
	Model = Backbone.Model.extend({
		initialize: function(){
		},
		defaults : {
		}
	});
	
	return Model;

});
