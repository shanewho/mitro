(function(){function q(m){var b=m.util=m.util||{};"undefined"!==typeof process&&process.nextTick?(b.nextTick=process.nextTick,b.setImmediate="function"===typeof setImmediate?setImmediate:b.nextTick):"function"===typeof setImmediate?(b.setImmediate=setImmediate,b.nextTick=function(a){return setImmediate(a)}):(b.setImmediate=function(a){setTimeout(a,0)},b.nextTick=b.setImmediate);b.isArray=Array.isArray||function(a){return"[object Array]"===Object.prototype.toString.call(a)};b.isArrayBuffer=function(a){return"undefined"!==
typeof ArrayBuffer&&a instanceof ArrayBuffer};var k=[];"undefined"!==typeof Int8Array&&k.push(Int8Array);"undefined"!==typeof Uint8Array&&k.push(Uint8Array);"undefined"!==typeof Uint8ClampedArray&&k.push(Uint8ClampedArray);"undefined"!==typeof Int16Array&&k.push(Int16Array);"undefined"!==typeof Uint16Array&&k.push(Uint16Array);"undefined"!==typeof Int32Array&&k.push(Int32Array);"undefined"!==typeof Uint32Array&&k.push(Uint32Array);"undefined"!==typeof Float32Array&&k.push(Float32Array);"undefined"!==
typeof Float64Array&&k.push(Float64Array);b.isArrayBufferView=function(a){for(var c=0;c<k.length;++c)if(a instanceof k[c])return!0;return!1};b.ByteBuffer=function(a){this.data="";this.read=0;if("string"===typeof a)this.data=a;else if(b.isArrayBuffer(a)||b.isArrayBufferView(a)){a=new Uint8Array(a);try{this.data=String.fromCharCode.apply(null,a)}catch(c){for(var d=0;d<a.length;++d)this.putByte(a[d])}}else a instanceof b.ByteBuffer&&(this.data=a.data,this.read=a.read)};b.ByteBuffer.prototype.length=
function(){return this.data.length-this.read};b.ByteBuffer.prototype.isEmpty=function(){return 0>=this.length()};b.ByteBuffer.prototype.putByte=function(a){this.data+=String.fromCharCode(a);return this};b.ByteBuffer.prototype.fillWithByte=function(a,c){a=String.fromCharCode(a);for(var d=this.data;0<c;)c&1&&(d+=a),c>>>=1,0<c&&(a+=a);this.data=d;return this};b.ByteBuffer.prototype.putBytes=function(a){this.data+=a;return this};b.ByteBuffer.prototype.putString=function(a){this.data+=b.encodeUtf8(a);
return this};b.ByteBuffer.prototype.putInt16=function(a){this.data+=String.fromCharCode(a>>8&255)+String.fromCharCode(a&255);return this};b.ByteBuffer.prototype.putInt24=function(a){this.data+=String.fromCharCode(a>>16&255)+String.fromCharCode(a>>8&255)+String.fromCharCode(a&255);return this};b.ByteBuffer.prototype.putInt32=function(a){this.data+=String.fromCharCode(a>>24&255)+String.fromCharCode(a>>16&255)+String.fromCharCode(a>>8&255)+String.fromCharCode(a&255);return this};b.ByteBuffer.prototype.putInt16Le=
function(a){this.data+=String.fromCharCode(a&255)+String.fromCharCode(a>>8&255);return this};b.ByteBuffer.prototype.putInt24Le=function(a){this.data+=String.fromCharCode(a&255)+String.fromCharCode(a>>8&255)+String.fromCharCode(a>>16&255);return this};b.ByteBuffer.prototype.putInt32Le=function(a){this.data+=String.fromCharCode(a&255)+String.fromCharCode(a>>8&255)+String.fromCharCode(a>>16&255)+String.fromCharCode(a>>24&255);return this};b.ByteBuffer.prototype.putInt=function(a,c){do c-=8,this.data+=
String.fromCharCode(a>>c&255);while(0<c);return this};b.ByteBuffer.prototype.putSignedInt=function(a,c){0>a&&(a+=2<<c-1);return this.putInt(a,c)};b.ByteBuffer.prototype.putBuffer=function(a){this.data+=a.getBytes();return this};b.ByteBuffer.prototype.getByte=function(){return this.data.charCodeAt(this.read++)};b.ByteBuffer.prototype.getInt16=function(){var a=this.data.charCodeAt(this.read)<<8^this.data.charCodeAt(this.read+1);this.read+=2;return a};b.ByteBuffer.prototype.getInt24=function(){var a=
this.data.charCodeAt(this.read)<<16^this.data.charCodeAt(this.read+1)<<8^this.data.charCodeAt(this.read+2);this.read+=3;return a};b.ByteBuffer.prototype.getInt32=function(){var a=this.data.charCodeAt(this.read)<<24^this.data.charCodeAt(this.read+1)<<16^this.data.charCodeAt(this.read+2)<<8^this.data.charCodeAt(this.read+3);this.read+=4;return a};b.ByteBuffer.prototype.getInt16Le=function(){var a=this.data.charCodeAt(this.read)^this.data.charCodeAt(this.read+1)<<8;this.read+=2;return a};b.ByteBuffer.prototype.getInt24Le=
function(){var a=this.data.charCodeAt(this.read)^this.data.charCodeAt(this.read+1)<<8^this.data.charCodeAt(this.read+2)<<16;this.read+=3;return a};b.ByteBuffer.prototype.getInt32Le=function(){var a=this.data.charCodeAt(this.read)^this.data.charCodeAt(this.read+1)<<8^this.data.charCodeAt(this.read+2)<<16^this.data.charCodeAt(this.read+3)<<24;this.read+=4;return a};b.ByteBuffer.prototype.getInt=function(a){var c=0;do c=(c<<8)+this.data.charCodeAt(this.read++),a-=8;while(0<a);return c};b.ByteBuffer.prototype.getSignedInt=
function(a){var c=this.getInt(a);a=2<<a-2;c>=a&&(c-=a<<1);return c};b.ByteBuffer.prototype.getBytes=function(a){var c;a?(a=Math.min(this.length(),a),c=this.data.slice(this.read,this.read+a),this.read+=a):0===a?c="":(c=0===this.read?this.data:this.data.slice(this.read),this.clear());return c};b.ByteBuffer.prototype.bytes=function(a){return"undefined"===typeof a?this.data.slice(this.read):this.data.slice(this.read,this.read+a)};b.ByteBuffer.prototype.at=function(a){return this.data.charCodeAt(this.read+
a)};b.ByteBuffer.prototype.setAt=function(a,c){this.data=this.data.substr(0,this.read+a)+String.fromCharCode(c)+this.data.substr(this.read+a+1);return this};b.ByteBuffer.prototype.last=function(){return this.data.charCodeAt(this.data.length-1)};b.ByteBuffer.prototype.copy=function(){var a=b.createBuffer(this.data);a.read=this.read;return a};b.ByteBuffer.prototype.compact=function(){0<this.read&&(this.data=this.data.slice(this.read),this.read=0);return this};b.ByteBuffer.prototype.clear=function(){this.data=
"";this.read=0;return this};b.ByteBuffer.prototype.truncate=function(a){a=Math.max(0,this.length()-a);this.data=this.data.substr(this.read,a);this.read=0;return this};b.ByteBuffer.prototype.toHex=function(){for(var a="",c=this.read;c<this.data.length;++c){var d=this.data.charCodeAt(c);16>d&&(a+="0");a+=d.toString(16)}return a};b.ByteBuffer.prototype.toString=function(){return b.decodeUtf8(this.bytes())};b.createBuffer=function(a,c){void 0!==a&&"utf8"===(c||"raw")&&(a=b.encodeUtf8(a));return new b.ByteBuffer(a)};
b.fillString=function(a,c){for(var d="";0<c;)c&1&&(d+=a),c>>>=1,0<c&&(a+=a);return d};b.xorBytes=function(a,c,d){for(var b="",e="",f="",h=0,l=0;0<d;--d,++h)e=a.charCodeAt(h)^c.charCodeAt(h),10<=l&&(b+=f,f="",l=0),f+=String.fromCharCode(e),++l;return b+f};b.hexToBytes=function(a){var c="",d=0;a.length&1&&(d=1,c+=String.fromCharCode(parseInt(a[0],16)));for(;d<a.length;d+=2)c+=String.fromCharCode(parseInt(a.substr(d,2),16));return c};b.bytesToHex=function(a){return b.createBuffer(a).toHex()};b.int32ToBytes=
function(a){return String.fromCharCode(a>>24&255)+String.fromCharCode(a>>16&255)+String.fromCharCode(a>>8&255)+String.fromCharCode(a&255)};var n=[62,-1,-1,-1,63,52,53,54,55,56,57,58,59,60,61,-1,-1,-1,64,-1,-1,-1,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-1,-1,-1,-1,-1,-1,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51];b.encode64=function(a,c){for(var d="",b="",e,f,h,l=0;l<a.length;)e=a.charCodeAt(l++),f=a.charCodeAt(l++),h=a.charCodeAt(l++),
d+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(e>>2),d+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt((e&3)<<4|f>>4),isNaN(f)?d+="==":(d+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt((f&15)<<2|h>>6),d+=isNaN(h)?"=":"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(h&63)),c&&d.length>c&&(b+=d.substr(0,c)+"\r\n",d=d.substr(c));return b+d};b.decode64=function(a){a=a.replace(/[^A-Za-z0-9\+\/\=]/g,
"");for(var c="",d,b,e,f,h=0;h<a.length;)d=n[a.charCodeAt(h++)-43],b=n[a.charCodeAt(h++)-43],e=n[a.charCodeAt(h++)-43],f=n[a.charCodeAt(h++)-43],c+=String.fromCharCode(d<<2|b>>4),64!==e&&(c+=String.fromCharCode((b&15)<<4|e>>2),64!==f&&(c+=String.fromCharCode((e&3)<<6|f)));return c};b.encodeUtf8=function(a){return unescape(encodeURIComponent(a))};b.decodeUtf8=function(a){return decodeURIComponent(escape(a))};b.deflate=function(a,c,d){c=b.decode64(a.deflate(b.encode64(c)).rval);d&&(a=2,c.charCodeAt(1)&
32&&(a=6),c=c.substring(a,c.length-4));return c};b.inflate=function(a,c,d){a=a.inflate(b.encode64(c)).rval;return null===a?null:b.decode64(a)};var p=function(a,c,d){if(!a)throw{message:"WebStorage not available."};null===d?a=a.removeItem(c):(d=b.encode64(JSON.stringify(d)),a=a.setItem(c,d));if("undefined"!==typeof a&&!0!==a.rval)throw a.error;},u=function(a,c){if(!a)throw{message:"WebStorage not available."};var d=a.getItem(c);if(a.init)if(null===d.rval){if(d.error)throw d.error;d=null}else d=d.rval;
null!==d&&(d=JSON.parse(b.decode64(d)));return d},q=function(a,c,d,b){var e=u(a,c);null===e&&(e={});e[d]=b;p(a,c,e)},s=function(a,c,d){a=u(a,c);null!==a&&(a=d in a?a[d]:null);return a},t=function(a,c,d){var b=u(a,c);if(null!==b&&d in b){delete b[d];d=!0;for(var e in b){d=!1;break}d&&(b=null);p(a,c,b)}},w=function(a,c){p(a,c,null)},r=function(a,c,b){var g=null;"undefined"===typeof b&&(b=["web","flash"]);var e,f=!1,h=null,l;for(l in b){e=b[l];try{if("flash"===e||"both"===e){if(null===c[0])throw{message:"Flash local storage not available."};
g=a.apply(this,c);f="flash"===e}if("web"===e||"both"===e)c[0]=localStorage,g=a.apply(this,c),f=!0}catch(k){h=k}if(f)break}if(!f)throw h;return g};b.setItem=function(a,c,b,g,e){r(q,arguments,e)};b.getItem=function(a,c,b,g){return r(s,arguments,g)};b.removeItem=function(a,c,b,g){r(t,arguments,g)};b.clearItems=function(a,c,b){r(w,arguments,b)};b.parseUrl=function(a){var c=/^(https?):\/\/([^:&^\/]*):?(\d*)(.*)$/g;c.lastIndex=0;c=c.exec(a);if(a=null===c?null:{full:a,scheme:c[1],host:c[2],port:c[3],path:c[4]})a.fullHost=
a.host,a.port?80!==a.port&&"http"===a.scheme?a.fullHost+=":"+a.port:443!==a.port&&"https"===a.scheme&&(a.fullHost+=":"+a.port):"http"===a.scheme?a.port=80:"https"===a.scheme&&(a.port=443),a.full=a.scheme+"://"+a.fullHost;return a};var v=null;b.getQueryVariables=function(a){var c=function(a){var c={};a=a.split("&");for(var b=0;b<a.length;b++){var f=a[b].indexOf("="),h;0<f?(h=a[b].substring(0,f),f=a[b].substring(f+1)):(h=a[b],f=null);h in c||(c[h]=[]);h in Object.prototype||null===f||c[h].push(unescape(f))}return c};
"undefined"===typeof a?(null===v&&(v="undefined"===typeof window?{}:c(window.location.search.substring(1))),a=v):a=c(a);return a};b.parseFragment=function(a){var c=a,d="",g=a.indexOf("?");0<g&&(c=a.substring(0,g),d=a.substring(g+1));a=c.split("/");0<a.length&&""===a[0]&&a.shift();g=""===d?{}:b.getQueryVariables(d);return{pathString:c,queryString:d,path:a,query:g}};b.makeRequest=function(a){var c=b.parseFragment(a),d={path:c.pathString,query:c.queryString,getPath:function(a){return"undefined"===typeof a?
c.path:c.path[a]},getQuery:function(a,b){var d;"undefined"===typeof a?d=c.query:(d=c.query[a])&&"undefined"!==typeof b&&(d=d[b]);return d},getQueryLast:function(a,c){var b=d.getQuery(a);return b?b[b.length-1]:c}};return d};b.makeLink=function(a,c,b){a=jQuery.isArray(a)?a.join("/"):a;c=jQuery.param(c||{});b=b||"";return a+(0<c.length?"?"+c:"")+(0<b.length?"#"+b:"")};b.setPath=function(a,c,b){if("object"===typeof a&&null!==a)for(var g=0,e=c.length;g<e;){var f=c[g++];if(g==e)a[f]=b;else{var h=f in a;
if(!h||h&&"object"!==typeof a[f]||h&&null===a[f])a[f]={};a=a[f]}}};b.getPath=function(a,c,b){for(var g=0,e=c.length,f=!0;f&&g<e&&"object"===typeof a&&null!==a;){var h=c[g++];(f=h in a)&&(a=a[h])}return f?a:b};b.deletePath=function(a,b){if("object"===typeof a&&null!==a)for(var d=0,g=b.length;d<g;){var e=b[d++];if(d==g)delete a[e];else{if(!(e in a)||"object"!==typeof a[e]||null===a[e])break;a=a[e]}}};b.isEmpty=function(a){for(var b in a)if(a.hasOwnProperty(b))return!1;return!0};b.format=function(a){var b=
/%./g,d,g,e=0,f=[];for(g=0;d=b.exec(a);)switch(g=a.substring(g,b.lastIndex-2),0<g.length&&f.push(g),g=b.lastIndex,d=d[0][1],d){case "s":case "o":e<arguments.length?f.push(arguments[e++ +1]):f.push("<?>");break;case "%":f.push("%");break;default:f.push("<%"+d+"?>")}f.push(a.substring(g));return f.join("")};b.formatNumber=function(a,b,d,g){var e=isNaN(b=Math.abs(b))?2:b;b=void 0===d?",":d;g=void 0===g?".":g;d=0>a?"-":"";var f=parseInt(a=Math.abs(+a||0).toFixed(e),10)+"",h=3<f.length?f.length%3:0;return d+
(h?f.substr(0,h)+g:"")+f.substr(h).replace(/(\d{3})(?=\d)/g,"$1"+g)+(e?b+Math.abs(a-f).toFixed(e).slice(2):"")};b.formatSize=function(a){return a=1073741824<=a?b.formatNumber(a/1073741824,2,".","")+" GiB":1048576<=a?b.formatNumber(a/1048576,2,".","")+" MiB":1024<=a?b.formatNumber(a/1024,0)+" KiB":b.formatNumber(a,0)+" bytes"};b.bytesFromIP=function(a){return-1!==a.indexOf(".")?b.bytesFromIPv4(a):-1!==a.indexOf(":")?b.bytesFromIPv6(a):null};b.bytesFromIPv4=function(a){a=a.split(".");if(4!==a.length)return null;
for(var c=b.createBuffer(),d=0;d<a.length;++d){var g=parseInt(a[d],10);if(isNaN(g))return null;c.putByte(g)}return c.getBytes()};b.bytesFromIPv6=function(a){var c=0;a=a.split(":").filter(function(a){0===a.length&&++c;return!0});for(var d=2*(8-a.length+c),g=b.createBuffer(),e=0;8>e;++e)if(a[e]&&0!==a[e].length){var f=b.hexToBytes(a[e]);2>f.length&&g.putByte(0);g.putBytes(f)}else g.fillWithByte(0,d),d=0;return g.getBytes()};b.bytesToIP=function(a){return 4===a.length?b.bytesToIPv4(a):16===a.length?
b.bytesToIPv6(a):null};b.bytesToIPv4=function(a){if(4!==a.length)return null;for(var b=[],d=0;d<a.length;++d)b.push(a.charCodeAt(d));return b.join(".")};b.bytesToIPv6=function(a){if(16!==a.length)return null;for(var c=[],d=[],g=0,e=0;e<a.length;e+=2){for(var f=b.bytesToHex(a[e]+a[e+1]);"0"===f[0]&&"0"!==f;)f=f.substr(1);if("0"===f){var h=d[d.length-1],l=c.length;h&&l===h.end+1?(h.end=l,h.end-h.start>d[g].end-d[g].start&&(g=d.length-1)):d.push({start:l,end:l})}c.push(f)}0<d.length&&(a=d[g],0<a.end-
a.start&&(c.splice(a.start,a.end-a.start+1,""),0===a.start&&c.unshift(""),7===a.end&&c.push("")));return c.join(":")};b.estimateCores=function(a,c){function d(a,l,k){if(0===l){var x=Math.floor(a.reduce(function(a,b){return a+b},0)/a.length);b.cores=Math.max(1,x);URL.revokeObjectURL(f);return c(null,b.cores)}g(k,function(b,c){a.push(e(k,c));d(a,l-1,k)})}function g(a,b){for(var c=[],d=[],e=0;e<a;++e){var g=new Worker(f);g.addEventListener("message",function(e){d.push(e.data);if(d.length===a){for(e=
0;e<a;++e)c[e].terminate();b(null,d)}});c.push(g)}for(e=0;e<a;++e)c[e].postMessage(e)}function e(a,b){for(var c=[],d=0;d<a;++d)for(var e=b[d],f=c[d]=[],g=0;g<a;++g)if(d!==g){var k=b[g];(e.st>k.st&&e.st<k.et||k.st>e.st&&k.st<e.et)&&f.push(g)}return c.reduce(function(a,b){return Math.max(a,b.length)},0)}"function"===typeof a&&(c=a,a={});a=a||{};if("cores"in b&&!a.update)return c(null,b.cores);if(void 0===typeof Worker)return b.cores=1,c(null,b.cores);if(void 0===typeof Blob)return b.cores=2,c(null,
b.cores);var f=URL.createObjectURL(new Blob(["(",function(){self.addEventListener("message",function(a){a=Date.now();for(var b=a+4;Date.now()<b;);self.postMessage({st:a,et:b})})}.toString(),")()"],{type:"application/javascript"}));d([],5,16)}}if("function"!==typeof define)if("object"===typeof module&&module.exports){var w=!0;define=function(m,b){b(require,module)}}else return"undefined"===typeof forge&&(forge={}),q(forge);var s,y=function(m,b){b.exports=function(b){var n=s.map(function(b){return m(b)}).concat(q);
b=b||{};b.defined=b.defined||{};if(b.defined.util)return b.util;b.defined.util=!0;for(var p=0;p<n.length;++p)n[p](b);return b.util}},t=define;define=function(m,b){s="string"===typeof m?b.slice(2):m.slice(2);if(w)return delete define,t.apply(null,Array.prototype.slice.call(arguments,0));define=t;return define.apply(null,Array.prototype.slice.call(arguments,0))};define(["require","module"],function(){y.apply(null,Array.prototype.slice.call(arguments,0))})})();
