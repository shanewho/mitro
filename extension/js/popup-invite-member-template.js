if (!!!templates) var templates = {};
templates["popup-invite-member-template"] = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<div class=\"secret-item identity\" data-secret-id=\"");t.b(t.v(t.f("secretId",c,p,0)));t.b("\">");t.b("\n" + i);t.b("  <div class=\"text\">");t.b("\n" + i);t.b("    <div class=\"account\" title=\"");t.b(t.v(t.f("renderedTitle",c,p,0)));t.b("\">");t.b(t.v(t.f("renderedTitle",c,p,0)));t.b("</div>");t.b("\n" + i);t.b("    <div class=\"user\" title=\"");t.b(t.v(t.d("clientData.username",c,p,0)));t.b("\">");t.b(t.v(t.d("clientData.username",c,p,0)));t.b("</div>");t.b("\n" + i);t.b("  </div>");t.b("\n" + i);t.b("  <div class=\"edit secret-edit-action\">");t.b("\n" + i);t.b("    <a href=\"#\" title=\"Edit account\">");t.b("\n" + i);t.b("      <span class=\"mitro-icon-edit\"></span>");t.b("\n" + i);t.b("    </a>");t.b("\n" + i);t.b("  </div>");t.b("\n" + i);t.b("</div>");t.b("\n");t.b("\n" + i);t.b("<div class=\"heading\">");t.b("\n" + i);t.b("  <div class=\"left\">");t.b("\n" + i);t.b("    <a href=\"#\" class=\"back\" data-open-pane=\"team\" data-secret-id=\"");t.b(t.v(t.f("secretId",c,p,0)));t.b("\">");t.b("\n" + i);t.b("      <span class=\"mitro-icon-arrow-left\"></span>back");t.b("\n" + i);t.b("    </a>");t.b("\n" + i);t.b("  </div>");t.b("\n" + i);t.b("  <h1>Invite</h1>");t.b("\n" + i);t.b("</div>");return t.fl(); },partials: {}, subs: {  }});
