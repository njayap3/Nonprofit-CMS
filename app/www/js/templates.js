this["templates"] = this["templates"] || {};

this["templates"]["about"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<h3>This is a Non-profit Content Management System</h3><div id=\"sampleAnimation\"></div>";
},"useData":true});

this["templates"]["contactform"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<h2>Contact Form</h2><p>Please enter your details</p><div class=\"col-md-6\"><form><div class=\"form-group\"><label for=\"fname\">First Name</label><input type=\"text\" class=\"form-control\" id=\"fname\" name=\"fname\" placeholder=\"Enter your First name\" value=\""
    + alias3(((helper = (helper = helpers.fname || (depth0 != null ? depth0.fname : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"fname","hash":{},"data":data}) : helper)))
    + "\"></div><div class=\"form-group\"><label for=\"lname\">Last Name</label><input type=\"text\" class=\"form-control\" id=\"lname\" name=\"lname\" placeholder=\"Enter your Last name\" value=\""
    + alias3(((helper = (helper = helpers.lname || (depth0 != null ? depth0.lname : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"lname","hash":{},"data":data}) : helper)))
    + "\"></div><div class=\"form-group\"><label for=\"email\">Email</label><input type=\"email\" class=\"form-control\" id=\"email\" name=\"email\" placeholder=\"youemail@mail.com\" value=\""
    + alias3(((helper = (helper = helpers.email || (depth0 != null ? depth0.email : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"email","hash":{},"data":data}) : helper)))
    + "\"></div><div class=\"form-group\"><label for=\"phoneno\">Phone</label><input type=\"phone\" class=\"form-control\" id=\"phoneno\" name=\"phoneno\" placeholder=\"Enter your phone number\"></div><div class=\"form-group\"><label for=\"comments\">Comments</label><input type=\"textarea\" rows=\"5\" class=\"form-control\" id=\"comments\" name=\"comments\" placeholder=\"Your comments\"></div><div class=\"form-group\"><label for=\"reason\">Reason</label><select class=\"form-control\" id=\"reason\" name=\"reason\"><option>1</option><option>2</option><option>3</option><option>4</option><option>5</option></select></div><div class=\"form-group\"><label for=\"contactmethod\">Best way to contact</label><input type=\"textarea\" class=\"form-control\" id=\"contactmethod\" name=\"contactmethod\" placeholder=\"Besy way to contact\"></div><button class=\"btn btn-primary\" type=\"submit\">Submit</button></form></div>";
},"useData":true});

this["templates"]["donationSidenav"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div class=\"row\"><div class=\"col-md-2\"><ul class=\"nav nav-pills nav-stacked\"><li class=\"active\"><a href=\"#donations-list\" class=\"donationsList\" data-toggle=\"pill\">Donation List</a></li><li><a href=\"#donations-form\" data-toggle=\"pill\" class=\"donationsForm\">Donation Form</a></li></ul></div><div class=\"col-md-10\"><div id=\"donations-list\"></div><div id=\"donations-form\"></div></div></div>";
},"useData":true});

this["templates"]["donationform"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<h2>Donation Form</h2><p>Please enter your details</p><div class=\"col-md-6\"><form><div class=\"form-group\"><label for=\"amount\">Amount</label><input type=\"text\" class=\"form-control\" id=\"amount\" name=\"amount\" placeholder=\"Amount\" value=\""
    + alias3(((helper = (helper = helpers.amount || (depth0 != null ? depth0.amount : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"amount","hash":{},"data":data}) : helper)))
    + "\"></div><p>Payment Method: Credit card</p><div class=\"form-group\"><label for=\"creditCardNum\">Card Number</label><input type=\"text\" class=\"form-control\" id=\"creditCardNum\" name=\"creditCardNum\" placeholder=\"Amount\" value=\""
    + alias3(((helper = (helper = helpers.creditCardNum || (depth0 != null ? depth0.creditCardNum : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"creditCardNum","hash":{},"data":data}) : helper)))
    + "\"></div><div class=\"form-group\"><label for=\"cardType\">Type:</label><select class=\"form-control\" id=\"cardType\" name=\"cardType\" value=\""
    + alias3(((helper = (helper = helpers.cardType || (depth0 != null ? depth0.cardType : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"cardType","hash":{},"data":data}) : helper)))
    + "\"><option>Visa</option><option>Mastercard</option><option>Dinar card</option></select></div><div class=\"row\"><p>Expiration date:</p><div class=\"col-md-4 form-group\"><label for=\"month\">Month:</label><select class=\"form-control\" id=\"month\" name=\"month\"><option>January</option><option>February</option><option>March</option></select></div><div class=\"col-md-4 form-group\"><label for=\"year\">Year:</label><select class=\"form-control\" id=\"year\" name=\"year\"><option>2015</option><option>2014</option><option>2013</option></select></div></div><div class=\"form-group\"><label for=\"cvv\">CVV</label><input type=\"text\" class=\"form-control\" id=\"cvv\" name=\"cvv\" placeholder=\"Security code\"></div><div class=\"form-group\"><label for=\"name\">Name</label><input type=\"text\" class=\"form-control\" id=\"name\" name=\"name\" placeholder=\"Enter your name\"></div><div class=\"form-group\"><label for=\"address\">Address</label><input type=\"text\" class=\"form-control\" id=\"address\" name=\"address\" placeholder=\"Enter your Address\"></div><div class=\"form-group\"><label for=\"comments\">Comments</label><textarea rows=\"5\" class=\"form-control\" id=\"comments\" name=\"comments\" placeholder=\"Your comments\"></textarea></div><button id=\"donation-form-submit\" class=\"btn btn-primary\" type=\"submit\">Submit</button></form></div>";
},"useData":true});

this["templates"]["donations"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<tr><td>"
    + alias3(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "</td><td>$"
    + alias3(((helper = (helper = helpers.amount || (depth0 != null ? depth0.amount : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"amount","hash":{},"data":data}) : helper)))
    + "</td><td>"
    + alias3(((helper = (helper = helpers.date || (depth0 != null ? depth0.date : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"date","hash":{},"data":data}) : helper)))
    + "</td><td>*****-"
    + alias3(((helper = (helper = helpers.creditCardNum || (depth0 != null ? depth0.creditCardNum : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"creditCardNum","hash":{},"data":data}) : helper)))
    + "</td><td><div class=\"btn-group btn-group-sm\"><button type=\"button\" class=\"btn btn-primary\"><span class=\"glyphicon glyphicon-eye-open\"></span> View</button> <button type=\"button\" class=\"btn btn-warning\"><span class=\"glyphicon glyphicon-usd\"></span> Refund</button></div></td></tr>";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return "<table class=\"table table-bordered\"><thead><tr><th>Names</th><th>Amount</th><th>Date</th><th>Credit card</th><th>Actions</th></tr></thead><tbody>"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.donations : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "</tbody></table>";
},"useData":true});