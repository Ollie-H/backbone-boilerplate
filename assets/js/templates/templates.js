define(function(){

this["JST"] = this["JST"] || {};

this["JST"]["template"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<h1>Test</h1>';

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