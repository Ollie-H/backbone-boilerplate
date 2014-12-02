/**
*   @package        App.js
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
  'router', 
], function($, _, Backbone, Router){

  var initialize = function(){

    // Pass in our Router module and call it's initialize function
    Router.initialize();

    // without History API 
    Backbone.history.start(); 

  };

  return {
    initialize: initialize
  };

});