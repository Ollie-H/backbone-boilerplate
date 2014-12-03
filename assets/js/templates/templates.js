define(function(){

this["JST"] = this["JST"] || {};

this["JST"]["appLayout"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<header id="header">\n\t\n</header>\n\n<main id="main">\n\t\n</main>\n\n<footer id="footer">\n\t\n</footer>';

}
return __p
};

this["JST"]["footer"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div>Footer</div>    ';

}
return __p
};

this["JST"]["header"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div>Header</div> ';

}
return __p
};

this["JST"]["stepOne"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="page">\n\t<div class="page__inner--welcome">\n\t\t\n\t</div>\n</div>';

}
return __p
};

this["JST"]["welcome"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="page">\n\t<div class="page__inner--welcome">\n\n\t\t<div class="welcome">\n\t\t\t\n\t\t\t<div class="welcome__logo">\n\t\t\t\t<a href="#">\n\t\t\t\t\t<img src="/assets/images/optimized/logo.png" alt="Saatchi &amp; Saatchi - Grad Scheme" />\n\t\t\t\t</a>\n\t\t\t</div>\n\n\t\t\t<div class="welcome__inner">\n\n\t\t\t\t<h1 class="welcome__header">\n\t\t\t\t\tThe Door is open.\n\t\t\t\t</h1>\n\n\t\t\t\t<div class="welcome__copy">\n\n\t\t\t\t\t<p class="large"><strong>Saatchi &amp; Saatchi is opening The Door to 5 of the best and brightest new grads.</strong></p>\n\n\t\t\t\t\t<p>Prove to us that you are a creative thinker and future industry leader and we’ll offer you a 1 year paid work placement.</p>\n\n\t\t\t\t\t<p>It only takes five steps to get through The Door.</p>\n\n\t\t\t\t</div>\n\n\t\t\t\t<div class="welcome__cta">\n\t\t\t\t\t<a href="/#stepOne" class="btn">\n\t\t\t\t\t\tGo to Step One   \n\t\t\t\t\t</a>\n\t\t\t\t</div>\n\n\t\t\t</div>\n\n\t\t</div>\n\n\t</div>\n</div>';

}
return __p
};

  return this["JST"];

});