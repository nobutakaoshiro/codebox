// Requires
var Q = require('q');
var _ = require('lodash');

function ConnectionsRPCService(connections) {
    this.connections = connections;

    _.bindAll(this);
}

ConnectionsRPCService.prototype.count = function(args) {
    return this.connections.count();
};

// Exports
exports.ConnectionsRPCService = ConnectionsRPCService;
