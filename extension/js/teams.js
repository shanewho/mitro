$(document).ready(function(){var k=showSpinny($(".spinny"));background.fetchServices(function(f){background.listGroups(function(g){hideSpinny($(".spinny"),k);for(var b={},d=0;d<f.length;d++)for(var h=f[d],e=0;e<h.groups.length;e++){var c=h.groups[e];c in b||(b[c]=0);b[c]+=1}filterSortAndRenderTeams(g,b);addTags($(".teams-list .team"),".name",function(a){a=parseInt(a.attr("data-id"),10);a=g[a];return a.owningOrgName?[a.owningOrgName]:[]})},onBackgroundError)},onBackgroundError)});
