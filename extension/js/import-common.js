var mitro=mitro||require("./background_interface.js");(function(){if(!("UserData"in mitro)){var a=require("./userdata.js"),c;for(c in a)mitro[c]=a[c]}})();if("undefined"===typeof isVisibleGroup){var admin_common=require("./admin-common.js");isVisibleGroup=admin_common.isVisibleGroup}var passwords=[];function Password(a,c,b,f,g){this.username=a;this.password=c;this.loginurl=b;this.title=f;this.comment=g;this.shouldAdd=!0}
function whichPasswordsToAdd(){var a=[],c=$(":checkbox"),b;for(b=0;b<c.length;b++)!0===$(c[b]).prop("checked")&&a.push(b);return a}function appendPasswordsToPage(a){passwords=a;for(a=0;a<passwords.length;a++)passwords[a].id=a;a=templates["import-template"].render({passwords:passwords});$("#password-list").html(a);$("#add-to-mitro-button").show()}var numberCompleted=0;
function addDataToMitro(a){window.onbeforeunload=function(){return"WARNING: Leaving this tab will cancel the import!"};var c=whichPasswordsToAdd();if(numberCompleted<c.length){var c=c[numberCompleted],b=passwords[c].title,f=passwords[c].loginurl;f&&0!==f.indexOf("http")&&(f="http://"+f);mitro.importer.addSecret(b,f,passwords[c].username,passwords[c].password,passwords[c].comment,a,uploadProgress,showErrorDialog)}else $("#upload-progress").empty(),$("#upload-progress").append("<h3>Upload Completed.</h3>"),
numberCompleted=0,window.onbeforeunload=null}function uploadProgress(a){$("#add-to-mitro-button").hide();$("#password-list").hide();numberCompleted++;$("#upload-progress").empty();$("#upload-progress").append("<h3>"+numberCompleted+"/"+passwords.length+" secrets added to Mitro. </h3>");addDataToMitro(a)}
(function(){mitro.importer=mitro.importer||{};mitro.importer.addSecret=function(b,f,a,d,c,e,k,h){b={type:"manual",title:b};b.loginUrl=f;b.username=a;b.comment=c;f={password:d};a=function(){k(e)};e?(d=new mitro.AddSecretToGroupsData,d.clientData=b,d.criticalData=f,d.groupIds=[e.groupId],null!==e.organizationId&&d.groupIds.push(e.organizationId),background.addSecretToGroups(d,a,h)):background.addSecret({},b,f,a,h)};var a=function(b,a){this.orgId=b;this.orgName=a;this.groups=[]};mitro.importer.getGroupsByOrganization=
function(b,f,c){mitro.loadUserData(function(b){var c={},e;for(e in b.organizationInfo.organizations){var g=b.organizationInfo.organizations[parseInt(e,10)],g=new a(g.id,g.name);c[g.orgId]=g}e=new a(0,"Personal");c[0]=e;for(var h in b.groups){e=b.groups[h];if(e.owningOrgId&&e.isOrgPrivateGroup)e.name="(no team)";else if(!isVisibleGroup(e))continue;g=0;e.owningOrgId&&(g=e.owningOrgId);c[g].groups.push(e)}f(c)},c)};mitro.importer.getOrgAndGroupFromSelect=function(b){b=b.value;if(""===b)return null;b=
b.split(":");var a={organizationId:null,groupId:parseInt(b[1],10)};b[0]!==(0).toString()&&(a.organizationId=parseInt(b[0],10));return a};mitro.importer.applyGroupsToSelect=function(b,a){var c=function(a){var c=document.createElement("optgroup");c.label=a.orgName;for(var g=0;g<a.groups.length;g++){var f=a.groups[g],d=document.createElement("option");d.value=a.orgId+":"+f.groupId;d.label=f.name;c.appendChild(d)}b.appendChild(c);return c},d;for(d in a)d!==(0).toString()&&c(a[d]);c=c(a[0]);d=document.createElement("option");
d.value="";d.label="(no group)";d.selected=!0;c.appendChild(d)};mitro.importer.convertLineEndingsToUnix=function(b){b=b.replace(/\r\n/g,"\n");return b=b.replace(/\r/g,"\n")};mitro.importer.attachEventHandlers=function(b){$("#toggle-checked").click(function(){var a=$("input[type=checkbox]");a.prop("checked",!a.prop("checked"))});var a=document.getElementById("group-select");mitro.importer.getGroupsByOrganization(background,function(b){mitro.importer.applyGroupsToSelect(a,b)},function(a){alert("Error loading groups "+
a)});0<$("#files").length&&$("#files")[0].addEventListener("change",b,!1);$("#add-to-mitro-button").click(function(){$("#add-to-mitro-button").hide();var b=mitro.importer.getOrgAndGroupFromSelect(a);addDataToMitro(b)})};if("undefined"!==typeof exports)for(var c in mitro.importer)exports[c]=mitro.importer[c]})();
