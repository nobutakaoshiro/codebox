define([
], function() {
    var app = codebox.require("core/app");
    var menu = codebox.require("core/commands/menu");
    var rpc = codebox.require("core/backends/rpc");

    // Add menu
    menu.register("preview", {
        title: "Preview",
        position: 99
    }).menuSection([
        {
            'id': "preview.open",
            'category': "Preview",
            'title': "Preview with New Window",
            'description': "Preview with New Window",
            'action': function() {
                return rpc.execute("preview/url").then(function(url) {
                    return window.open(url);
                });
            }
        }
    ]);

    // Open changes if version changes
    app.once("ready", function() {
        //  Show release not if version increased
        //  If first time show welcome message
    });
});