var _backgroundMessageListeners={},_pageMessageListeners={},_onMessageFromPage=function(a){console.log("onMessageFromPage: "+a.type);if(a.type in _pageMessageListeners)_pageMessageListeners[a.type](a);else return!1},_onMessageFromBackground=function(a){return a.type in _backgroundMessageListeners?((0,_backgroundMessageListeners[a.type])(a),!0):!1},ContentScript=function(){};ContentScript.prototype.activatePageMessages=function(a){};
ContentScript.prototype.addBackgroundMessageListener=function(a,b){assert("string"===typeof a);assert("function"===typeof b);_backgroundMessageListeners[a]=b};ContentScript.prototype.addPageMessageListener=function(a,b){assert("string"===typeof a);assert("function"===typeof b);_pageMessageListeners[a]=b};
ContentScript.prototype.sendMessageToBackground=function(a,b,c){assert("string"===typeof a);"function"===typeof b&&(assert("undefined"===typeof c),c=b,b=void 0);a=client.composeMessage("background",a,b);"undefined"===typeof c?client.sendMessage(a):client.sendMessage(a,c)};ContentScript.prototype.sendMessageToPage=function(a,b){assert("string"===typeof a);var c=client.composeMessage("page",a,b);client.sendMessage(c)};
