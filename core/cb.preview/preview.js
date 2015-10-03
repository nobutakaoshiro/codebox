// Requires
var Q = require('q');
var _ = require('lodash');

var exec = require('../utils').exec;

// Get list of bind addr & ports
function previewUrl() {
    return process.env.ROOT_URL || "http://localhost:3000/";
}

// Exports
exports.previewUrl = previewUrl;
