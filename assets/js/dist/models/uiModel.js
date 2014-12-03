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
	'underscore'],
function($, Backbone, _){

	var that,
	Model = Backbone.Model.extend({
		urlRoot : '?getUi=test',
        defaults: {},
        initialize: function(){
        }
    });

	return Model;

});
