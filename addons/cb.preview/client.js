define([
], function() {
    var app = codebox.require("core/app");
    var menu = codebox.require("core/commands/menu");
    var rpc = codebox.require("core/backends/rpc");

    var previewUrl = "javascript:alrt('no preview')";


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
            'action': function(event) {
                window.open(previewUrl);
            }
        }
    ]);

    // Open changes if version changes
    app.once("ready", function() {
        rpc.execute("preview/url").then(function(url) {
            previewUrl = url;
        });
    });
});