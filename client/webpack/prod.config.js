const path = require('path');

const merge = require('webpack-merge');
const baseConfig = require('./base.config.js');

// TODO(jeffk): minification, etc
module.exports = merge(baseConfig, {});
