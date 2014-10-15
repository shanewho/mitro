var HOME_PATH="html/popup.html",ISSUE_PATH="html/issue.html",SERVICES_PATH="html/secrets.html",ADMIN_SYNC_PATH="html/admin-sync.html",ADMIN_ORG_PATH="html/admin-dashboard.html",IS_TOP_FRAME=window.top===window,FRAME_ID=IS_TOP_FRAME?"":randomString(20),openLinkInTab=function(a){helper.createTab(a)},VISIBILITY_TIMER_INTERVAL=500,tryingToLogIn=!1,popupInitiatedLoginInfo=null,cs=new ContentScript;client.initRemoteCalls("background",["generatePassword"]);client.addListener("background",_onMessageFromBackground);
var infobar=null,isInfobarShown=function(){return null!==infobar},showMitroLoginWarningInfobar=function(){isInfobarShown()||(infobar=displayInfobar("Warning: this password will not be saved because you are not logged in",[],[{text:"Log in to Mitro",action:function(){openLinkInTab(helper.getURL(HOME_PATH))}}],function(){infobar=null}))},openIssueWithHash=function(a){a=btoa(a);a=helper.getURL(ISSUE_PATH)+"#"+a;openLinkInTab(a)},showReplacePasswordInfobar=function(a,b,d,c){isInfobarShown()||(infobar=
displayInfobar("Do you want Mitro to replace your password for '"+b+"'?",[],[{text:"Replace",action:function(b){a.secretId=c.secretId;isNaN(a.orgId)&&(a.orgId=null);cs.sendMessageToBackground("replaceServiceAccepted",a)}},{text:"Never for this site",action:function(){cs.sendMessageToBackground("saveServiceBlacklisted",a)}}],function(){cs.sendMessageToBackground("saveServiceRejected",a);infobar=null}))},showSavePasswordInfobar=function(a,b,d,c){if(!isInfobarShown()){b="Do you want Mitro to save your password for '"+
b+"'?";c=[];if(d&&d.organizations)for(orgId in c.push({text:"for Me",value:null}),d.organizations){var e=d.organizations[orgId];c.push({text:"for "+e.name,value:e.id})}infobar=displayInfobar(b,c,[{text:"Save",action:function(b){a.orgId=parseInt(b?b.value:null,10);isNaN(a.orgId)&&(a.orgId=null);cs.sendMessageToBackground("saveServiceAccepted",a)}},{text:"Never for this site",action:function(){cs.sendMessageToBackground("saveServiceBlacklisted",a)}}],function(){cs.sendMessageToBackground("saveServiceRejected",
a);infobar=null})}},showLoginInfobar=function(a){isInfobarShown()||(console.log("login infobar",a),infobar=displayInfobar("Log in with Mitro as:",a,[{text:"Log In",action:function(a){console.log("--\x3e loginAccepted",a.value);tryingToLogIn=!0;cs.sendMessageToBackground("loginAccepted",a)}}],function(){cs.sendMessageToBackground("loginRejected");infobar=null}))};
cs.addBackgroundMessageListener("loginAccepted",function(a){a.frameId===FRAME_ID?(console.log("attempting to log in due to frame id match.  act:"+FRAME_ID+", exp:"+a.frameId),guessAndFillLoginForm(a.data)):console.log("not attempting to log in due to frame id mismatch. act:"+FRAME_ID+", exp:"+a.frameId)});
function maybeShowLoginInfobar(a){if(popupInitiatedLoginInfo)return(a=guessAndFillLoginForm(popupInitiatedLoginInfo))&&(popupInitiatedLoginInfo=null),a;if(a){for(var b=[],d=0;d<a.length;d++){var c=a[d],e=c.clientData.type?c.clientData.type:"auto";"auto"!==e&&"manual"!==e||!isLoginPageForService(c)||b.push({text:c.clientData.username,value:c.secretId,isSelected:c.mostRecent,frameId:FRAME_ID})}0<b.length&&(b.sort(function(a,b){var c=a&&a.text?a.text.toLowerCase():"",d=b&&b.text?b.text.toLowerCase():
"";return c===d?0:c>d?1:-1}),$('input[type="password"]').closest("form").each(function(){$(this).attr("autocomplete","off")}),IS_TOP_FRAME?showLoginInfobar(b):cs.sendMessageToBackground("showInfoBarOnTopFrame",b))}}cs.addBackgroundMessageListener("showMitroLoginWarningInfobar",function(a){IS_TOP_FRAME&&isLoginPage()&&showMitroLoginWarningInfobar()});
cs.addBackgroundMessageListener("showInfoBarOnTopFrame",function(a){IS_TOP_FRAME?(console.log("should show infobar cause I am the top frame"),showLoginInfobar(a.data)):console.log("ignoring infobar message because I am not top frame")});
cs.addBackgroundMessageListener("showSaveServiceDialog",function(a){console.log("CONTENT got show service dialog");if(IS_TOP_FRAME)try{console.log("showSaveServiceDialog");var b=JSON.parse(a.data.recordedData);assert(b.usernameField);$(document).ready(function(){try{(a.data.replacedSecretData?showReplacePasswordInfobar:showSavePasswordInfobar)(b,b.usernameField.value,a.data.orgInfo,a.data.replacedSecretData)}catch(c){console.log("Error:",c.message)}})}catch(d){console.log("Error: ",d.message)}else console.log("ignoring save password infobar request for frame:",
FRAME_ID)});cs.addBackgroundMessageListener("refreshOnMitroLogin",function(a){console.log("CONTENT::  refreshOnMitroLogin");isInfobarShown()?(infobar.close(function(){setServiceInstancesAndShowInfobar(a.data.services)}),infobar=null):setServiceInstancesAndShowInfobar(a.data.services)});
cs.addBackgroundMessageListener("copySelection",function(a){var b=window.getSelection().toString();b?(helper.background.addSecretFromSelection(a.data.tabUrl,b),console.log("Successfully copied the text. Sending back to background.")):console.log("The selection is empty. Must be wrong frame. Ignoring.")});var serviceInstances=null;function setServiceInstancesAndShowInfobar(a){serviceInstances=a;maybeShowLoginInfobar(a)}
cs.onInitResponse=function(a){var b=a.data;a.data.frameId!==FRAME_ID?console.log("got message for different frame; ignoring. target:"+FRAME_ID+" me:"+FRAME_ID):(console.log("onInitResponse"),$(function(){onBackgroundFormHintsForDomain(b.serverHints);b.login?(tryingToLogIn=!0,popupInitiatedLoginInfo=b.login,assert(popupInitiatedLoginInfo),maybeShowLoginInfobar(null)):b.services&&setServiceInstancesAndShowInfobar(b.services)}))};
if(window.location.hostname.match(/(^|\.)mitro\.co$/)||debugMode&&"localhost"===window.location.hostname){if(cs.activatePageMessages(client),$(function(){if(window.location.hostname.match(/(^|\.)mitro\.co$/)||debugMode&&"localhost"===window.location.hostname){var a=$("#signin-button");0<a.length&&(a.text("sign in"),a.attr("href","#"),a.click(function(){console.log("trying to redirect.....");helper.redirectTo(helper.getURL(HOME_PATH))}))}}),window.location.hostname.match(/(^|\.)mitro\.co$/)){var REMOTE_SERVICES_PATHS=
{"/extension_services.html":!0},REMOTE_ADMIN_SYNC_PATH="/extension_admin_sync.html",REMOTE_ORG_PATH="/extension_organizations.html",path=window.location.pathname;if(isInstallPage(window.location.href)){var redirectUrl=getInstallRedirectUrl(window.location.href);helper.redirectTo(redirectUrl)}(path in REMOTE_SERVICES_PATHS||window.location.href.match("^https://www[.]mitro[.]co/$"))&&helper.redirectTo(helper.getURL(SERVICES_PATH));path===REMOTE_ADMIN_SYNC_PATH&&helper.redirectTo(helper.getURL(ADMIN_SYNC_PATH));
path===REMOTE_ORG_PATH&&helper.redirectTo(helper.getURL(ADMIN_ORG_PATH))}}else cs.addBackgroundMessageListener("init",cs.onInitResponse),cs.sendMessageToBackground("init",{frameId:FRAME_ID,url:window.location.href});
var submitOverrideScript='HTMLFormElement.prototype._submit_IUORWFJKLFWRUSHEOT = HTMLFormElement.prototype.submit;\nHTMLFormElement.prototype.submit = function () {\n try {\n  var event = document.createEvent("Event");\n  event.initEvent("mitro_submit", true, true);\n  document.dispatchEvent(event);\n } catch (e) {\n  /* ignore if something fails when injecting event */\n } finally {\n  this._submit_IUORWFJKLFWRUSHEOT();\n }\n};',hasBeenInjected={},injectScriptIntoPage=function(a){if(!hasBeenInjected[a]){hasBeenInjected[a]=
!0;var b=document.createElement("script");b.setAttribute("type","application/javascript");b.textContent=a;document.head.appendChild(b)}},onBackgroundFormHintsForDomain=function(a){setServerHints(a);var b=null,d=function(){console.log("trying to unbind login form "+FRAME_ID);b&&b.submitField&&b.submitField.pointer.unbind("click",e)},c=function(){if(tryingToLogIn)return console.log("got a submission event on a form whilst we're logging in. Ignoring"),d(),!0;console.log("form submission");try{var a=
$(this),b=a.attr("id"),c=getLoginForm(this);if(!c||!c.usernameField||!c.passwordField)return!0;var e=document.location.toString(),f=a.attr("action");helper.preventAutoFill(c.passwordField.pointer,a);c.usernameField.pointer=void 0;c.passwordField.pointer=void 0;if(!c.usernameField.value)return console.log("no username value, rejecting submit"),!0;if(!c.passwordField.value)return console.log("no password value, rejecting submit"),!0;cs.sendMessageToBackground("formSubmit",{form_id:b,usernameField:c.usernameField,
passwordField:c.passwordField,before_page:e,after_page:f,title:document.title})}catch(g){console.log("error:",g)}return!0};$(document).on("submit","form",c);$(document).on("mitro_submit",null,c);var e=function(){maybeShowLoginInfobar(serviceInstances);$(document).off("click","form",e)};$(document).on("click","form",e);var h=function(){console.log("trying to bind login form"+FRAME_ID);d();if(b=guessLoginForm())if(injectScriptIntoPage(submitOverrideScript),b.submitField){var a=b.submitField.pointer,
p=a.closest("form");p.attr("autocomplete","off");a.bind("click",function(){c.apply(p[0])})}};h();var q=function(){for(var a=[],b=0;b<f.length;b++){var c=f[b],d=c;try{d=c[0]}catch(e){console.log(e)}$(d).is(":visible")&&getLoginForm(d)?(console.log("hidden login form became visible"+FRAME_ID),h(),maybeShowLoginInfobar(serviceInstances)):a.push(c)}f=a;0===f.length&&(clearInterval(g),g=null)},m=function(){0<f.length&&!g&&(g=setInterval(q,VISIBILITY_TIMER_INTERVAL))},n=function(a){var b=[];a.each(function(){!getLoginForm(this,
!1)||!$(this).is(":hidden")&&getLoginForm(this,!0)||b.push($(this))});console.log(b.length+" hidden login forms");return b},f=n($("form")),g=null;m();var k=new Date(0),l=!1,r=/^input$/i;$(document).bind("DOMNodeInserted",function(a){if(!l&&a.target.querySelector&&(r.test(a.target.tagName)||null!==a.target.querySelector("input"))){l=!0;a=0;var b=new Date;1E3>b-k&&(a=1E3-(b-k));console.log("scheduled form scan timeout:",a);window.setTimeout(function(){l=!1;k=new Date;h();maybeShowLoginInfobar(serviceInstances);
f=n($("form"));m()},a)}})};