if (!!!templates) var templates = {};
templates["secret-acl-template"] = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");if(t.s(t.f("groups",c,p,1),c,p,0,11,617,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("<li class=\"acl-item team team-group\">");t.b("\n" + i);t.b("  <div class=\"clearfix\">");t.b("\n" + i);t.b("    <div class=\"type\">");t.b("\n" + i);t.b("      <img class=\"team-icon\" width=\"50\" height=\"50\" src=\"");t.b(t.v(t.f("image",c,p,0)));t.b("\" alt=\"\" data-icon-text=\"");t.b(t.v(t.f("name",c,p,0)));t.b("\">");t.b("\n" + i);t.b("    </div>");t.b("\n" + i);t.b("    <div class=\"name search-this-value\">");t.b(t.v(t.f("name",c,p,0)));t.b("</div>");t.b("\n");t.b("\n" + i);t.b("    <div class=\"clearfix pull-right actions\">");t.b("\n" + i);t.b("      <div class=\"pull-left link2 ml\">");t.b("\n" + i);t.b("        <a href=\"manage-team.html?id=");t.b(t.v(t.f("groupId",c,p,0)));t.b("\">Manage</a>");t.b("\n" + i);t.b("      </div>");t.b("\n");t.b("\n" + i);t.b("      <div class=\"pull-left remove\">");t.b("\n" + i);t.b("        <a data-group-id=\"");t.b(t.v(t.f("groupId",c,p,0)));t.b("\" class=\"remove-user\">");t.b("\n" + i);t.b("          <i class=\"ico ico-cross\"></i>");t.b("\n" + i);t.b("        </a>");t.b("\n" + i);t.b("      </div>");t.b("\n" + i);t.b("    </div>");t.b("\n" + i);t.b("  </div>");t.b("\n" + i);t.b("</div>");t.b("\n" + i);});c.pop();}t.b("\n" + i);if(t.s(t.f("users",c,p,1),c,p,0,640,1267,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("<li class=\"member clearfix\"\">");t.b("\n" + i);t.b("  <div class=\"pull-left\">");t.b("\n" + i);t.b("    <img class=\"member-icon\" src=\"");t.b(t.v(t.f("photo",c,p,0)));t.b("\" alt=\"\" width=\"45\" height=\"45\" data-icon-text=\"");t.b(t.v(t.f("name",c,p,0)));t.b("\"/>");t.b("\n" + i);t.b("  </div>");t.b("\n");t.b("\n" + i);t.b("  <div class=\"text\">");t.b("\n" + i);t.b("    <div class=\"name search-this-value\">");t.b(t.v(t.f("name",c,p,0)));t.b("</div>");t.b("\n" + i);t.b("    <div class=\"link search-this-value\"><a href=\"#\">");t.b(t.v(t.f("email",c,p,0)));t.b("</a></div>");t.b("\n" + i);t.b("  </div>");t.b("\n");t.b("\n" + i);t.b("  <div class=\"clearfix pull-right actions\">");t.b("\n" + i);t.b("    <!--");t.b("\n" + i);t.b("    <div class=\"pull-left link2 ml\">");t.b("\n" + i);t.b("      <a href=\"manage-member.html\">Manage</a>");t.b("\n" + i);t.b("    </div>");t.b("\n" + i);t.b("    -->");t.b("\n");t.b("\n" + i);t.b("    <div class=\"pull-left\">");t.b("\n" + i);t.b("      <a data-user-id=\"");t.b(t.v(t.f("userId",c,p,0)));t.b("\" class=\"remove-user\"><i class=\"ico ico-cross\"></i></a>");t.b("\n" + i);t.b("    </div>");t.b("\n" + i);t.b("  </div>");t.b("\n" + i);t.b("</li>");t.b("\n" + i);});c.pop();}return t.fl(); },partials: {}, subs: {  }});
