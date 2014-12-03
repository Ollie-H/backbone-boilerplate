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
  'marionette',
  'router'
], function($, _, Backbone, Marionette, Router){

  var App = new Backbone.Marionette.Application();

  /// Add initialiser
  var initialize = function () {
      Router.initialize(App);
      Backbone.history.start();
  };

  return {
    initialize : initialize
  }

});