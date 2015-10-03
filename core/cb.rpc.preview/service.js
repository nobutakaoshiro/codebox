// Requires
var Q = require('q');
var _ = require('lodash');

function PreviewRPCService(preview) {
    this.preview = preview;

    _.bindAll(this);
}

PreviewRPCService.prototype.url = function(args) {
    return this.preview.url();
};

// Exports
exports.PreviewRPCService = PreviewRPCService;
