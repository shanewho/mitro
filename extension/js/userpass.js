var userpass={};
(function(){var d;d="undefined"===typeof window?require("./querystring"):window.decodeQueryString;userpass.encodeUsernamePassword=function(a,c){var b;b="u="+encodeURIComponent(a);return b=b+"&p="+encodeURIComponent(c)};userpass.decodeUsernamePassword=function(a){var c={username:null,password:null},b=d(a);b.u?(c.username=b.u,b.p&&(c.password=b.p),b.token&&(c.token=b.token),b.token_signature&&(c.token_signature=b.token_signature)):0===Object.keys(b).length&&(c.username=decodeURIComponent(a));return c};
userpass.hashToUsernamePassword=function(a){a||(a=window);a=a.location.hash;if(0===a.length)return{username:null,password:null};a=a.substring(1);return userpass.decodeUsernamePassword(a)};"undefined"!==typeof module&&module.exports&&(module.exports=userpass)})();