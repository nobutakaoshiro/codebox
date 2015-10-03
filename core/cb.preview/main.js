// Requires
var _ = require('lodash');

var previewUrl = require('./preview').previewUrl;

function setup(options, imports, register) {
    var serverPort = imports.server.port;

    // Listing function adapted for current running instance
    register(null, {
        'preview': {
            // List using the given urlPattern
            'url': previewUrl
        }
    });
}

// Exports
module.exports = setup;