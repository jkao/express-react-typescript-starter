const path = require('path');
const uglifyPlugin = require('uglifyjs-webpack-plugin');
const merge = require('webpack-merge');

const baseConfig = require('./base.config.js');

module.exports = merge(baseConfig, {
  mode: 'production',
  plugins: [
    new uglifyPlugin({
      cache: true,
      parallel: true,
      sourceMap: true
    })
  ]
});
