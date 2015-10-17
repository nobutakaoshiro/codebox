// Requires
var ConnectionsRPCService = require('./service').ConnectionsRPCService;

function setup(options, imports, register) {
    // Import
    var connections = imports.connections;
    var rpc = imports.rpc;

    // Service
    var service = new ConnectionsRPCService(connections);

    // Register RPC
    rpc.register('connections', service);

    // Register
    register(null, {});
}

// Exports
module.exports = setup;
