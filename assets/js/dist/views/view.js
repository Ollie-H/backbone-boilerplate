/**
*   @package        View.js
*   @subpackage     Javascript
*   @author         Ollie Husband
*   @copyright      Copyright 2014, Saatchi & Saatchi.
*   @version        1.0
*
************************************************************************************************************************ **/

define(["jquery","backbone","underscore","templates"],function(e,t,n,r){var i,s=t.View.extend({el:e("#main"),template:r.template(),initialize:function(){i=this},render:function(){var e=n.template(i.template);i.$el.html(e)},events:{}});return s});