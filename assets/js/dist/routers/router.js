/**
*   @package        Router.js
*   @subpackage     Javascript
*   @author         Ollie Husband
*   @copyright      Copyright 2014, Saatchi & Saatchi.
*   @version        1.0
*
************************************************************************************************************************ **/

define(["jquery","backbone","underscore","views/view"],function(e,t,n,r){var i=t.Router.extend({routes:{"":"home"},home:function(){var e=new r;e.render()}});return new i});