define(function(){

this["JST"] = this["JST"] || {};

this["JST"]["applayouttemplate"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<header id="header">\n\t\n</header>\n\n<main id="main">\n\t\n</main>\n\n<footer id="footer">\n\t\n</footer>';

}
return __p
};

this["JST"]["template"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<h1>' +
((__t = ( test )) == null ? '' : __t) +
'</h1>\n<a href="/#next">Next</a>';

}
return __p
};

this["JST"]["template2"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<h2>TEST2</h2>';

}
return __p
};

  return this["JST"];

});