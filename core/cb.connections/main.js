// Requires
var _ = require('lodash');

function setup(options, imports, register) {
    var server = imports.server.http;

    function connectionsCount() {
      return server.activeConnectionsCount || 0;
    }

    register(null, {
        'connections': {
            'count': connectionsCount
        }
    });
}

// Exports
module.exports = setup;