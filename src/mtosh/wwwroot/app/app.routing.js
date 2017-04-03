"use strict";
var router_1 = require("@angular/router");
var about_component_1 = require("./about.component");
var index_component_1 = require("./index.component");
var contact_component_1 = require("./contact.component");
var test_component_1 = require("./test.component");
var appRoutes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: index_component_1.IndexComponent, data: { title: 'Home' } },
    { path: 'about', component: about_component_1.AboutComponent, data: { title: 'About' } },
    { path: 'contact', component: contact_component_1.ContactComponent, data: { title: 'Contact' } },
    { path: 'test', component: test_component_1.TestComponent, data: { title: 'Test' } }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
exports.routedComponents = [about_component_1.AboutComponent, index_component_1.IndexComponent, contact_component_1.ContactComponent, test_component_1.TestComponent];
//# sourceMappingURL=app.routing.js.map