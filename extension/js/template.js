var originalSidebarHeight=$(".sidebar").outerHeight(),fixSidebarHeight=function(){var a=$(document).height()-$(".navbar").outerHeight(),b=$(".left-col").outerHeight();Math.max(originalSidebarHeight,a,b)};
$(document).ready(function(){console.log("template ready");fixSidebarHeight();$(window).resize(fixSidebarHeight);$(".dropdown-toggle").dropdown();background.getIdentity(function(a){null===a?"/html/install.html"===window.location.pathname?$("#account-menu").hide():helper.setLocation("popup.html"):$(".email").text(a.uid)});$(".logout-link").click(function(){background.mitroLogout(function(){helper.setLocation("popup.html")});return!1})});
