/**
*   @package        Main.js
*   @subpackage     Javascript
*   @author         Ollie Husband
*   @copyright      Copyright 2014, Saatchi & Saatchi.
*   @version        1.0
*
************************************************************************************************************************ **/

requirejs.config({
  urlArgs: "bust=" +  (new Date()).getTime(),
  // baseUrl:  (typeof rootUrl == 'undefined') ? '/assets/js' : rootUrl + '/assets/js',
  paths: {
    'config': 'config/config',
    'jquery': 'libs/jquery.1.9',
    'backbone': 'libs/backbone',
    'underscore': 'libs/underscore',
    'text': 'libs/text',
    'router': 'routers/router',
    'templates': 'templates/templates'
  },  
  shim: {
    'backbone': {
      'deps': ['jquery', 'underscore'],
      'exports': 'Backbone'
    },
    'text' : {
      'deps' : ['backbone']
    },
    'underscore': { 
      'exports': '_' 
    },
  }
});

/* Initialise backbone */
require([
  'app',
  'config',
], function(App, config){
  // Set config to global variable
  window.config = config;
  // Initialise app
  App.initialize();
});