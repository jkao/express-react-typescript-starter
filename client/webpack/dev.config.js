const path = require('path');

const merge = require('webpack-merge');
const baseConfig = require('./base.config.js');

const devServerPort = process.env['WEBPACK_DEV_PORT'] || '3002'

module.exports = merge(
  baseConfig,
  {
    devtool: 'source-map',
    devServer: {
      inline: true,
      contentBase: 'src',
      port: devServerPort,
    }
  }
);
