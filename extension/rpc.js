var mitro=mitro||{};
(function(){mitro.rpc={};var c="unknown";if("undefined"!==typeof window){try{CHROME?c="CHROME":SAFARI?c="SAFARI":FIREFOX?c="FIREFOX":WEBPAGE&&(c="WEBPAGE")}catch(k){}mitro.rpc._PostToMitro=function(a,b,g,e,d){b="https://"+b.server_host+":"+b.server_port+g;a.clientIdentifier=helper.getClientIdentifier();a.platform=c;a=JSON.stringify(a);helper.ajax({type:"POST",url:b,data:a,dataType:"json",complete:function(a){try{var b=JSON.parse(a.text);200===a.status?e(b):d(b)}catch(c){d({status:a.status,userVisibleError:"Unknown error",
exceptionType:"UnknownException"})}}})}}else if("undefined"!==typeof module&&module.exports){var h=require("https");module.exports=mitro.rpc;var f=!0;mitro.rpc.setCertificateValidationForTest=function(a){f=Boolean(a)};mitro.rpc._PostToMitro=function(a,b,c,e,d){e=e||mitro.rpc.DefaultResponseHandler;d=d||mitro.rpc.DefaultErrorHandler;a=JSON.stringify(a);b={host:b.server_host,port:b.server_port,path:c,method:"POST",headers:{"Content-Type":"application/json","Content-Length":a.length},rejectUnauthorized:!0};
f||(b.agent=!1,b.rejectUnauthorized=!1);b=h.request(b,function(a){a.setEncoding("utf-8");var b="";a.on("data",function(a){b+=a});a.on("end",function(){console.log("status: "+a.statusCode);if(200===a.statusCode)e(JSON.parse(b));else{var c={status:a.statusCode};try{c=JSON.parse(b)}finally{console.log("rpc error: ",b),d(c)}}})});b.on("error",function(a){console.log("rpc.js: RPC error");d({status:-1})});b.write(a);b.end()};mitro.rpc.DefaultResponseHandler=function(a){console.log(JSON.stringify(a,null,
4))};mitro.rpc.DefaultErrorHandler=function(a){console.log(JSON.stringify(a,null,4));throw Error("RPC error: "+a);}}})();