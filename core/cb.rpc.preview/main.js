// Requires
var PreviewRPCService = require('./service').PreviewRPCService;


function setup(options, imports, register) {
    // Import
    var preview = imports.preview;
    var rpc = imports.rpc;

    // Service
    var service = new PreviewRPCService(preview);

    // Register RPC
    rpc.register('preview', service);

    // Register
    register(null, {});
}

// Exports
module.exports = setup;
