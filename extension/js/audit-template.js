if (!!!templates) var templates = {};
templates["audit-template"] = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<thead>");t.b("\n" + i);t.b("  <tr>");t.b("\n" + i);t.b("    <th class=\"col2\">User</th>");t.b("\n" + i);t.b("    <th class=\"col1\">Action</th>");t.b("\n" + i);t.b("    <th class=\"col3\">Timestamp</th>");t.b("\n" + i);t.b("    <th class=\"col4\">IP Address</th>");t.b("\n" + i);t.b("  </tr>");t.b("\n" + i);t.b("</thead>");t.b("\n");t.b("\n" + i);if(t.s(t.f("events",c,p,1),c,p,0,181,406,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("<tr>");t.b("\n" + i);t.b("  <td class=\"gray\">");t.b(t.v(t.f("username",c,p,0)));t.b("</td>");t.b("\n" + i);t.b("  <td class=\"gray\">");t.b(t.v(t.f("actionString",c,p,0)));t.b("\n" + i);t.b("    <a class=\"audit-link\" href=\"");t.b(t.v(t.f("linkUrl",c,p,0)));t.b("\">");t.b(t.v(t.f("linkText",c,p,0)));t.b("</a>");t.b("\n" + i);t.b("  </td>");t.b("\n" + i);t.b("  <td class=\"gray\">");t.b(t.v(t.f("date",c,p,0)));t.b("</td>");t.b("\n" + i);t.b("  <td class=\"gray\">");t.b(t.v(t.f("sourceIp",c,p,0)));t.b("</td>");t.b("\n" + i);t.b("</tr>");t.b("\n" + i);});c.pop();}return t.fl(); },partials: {}, subs: {  }});
