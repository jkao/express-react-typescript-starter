const path = require('path');

/* generates an index.html with all paths filled in from a template */
const indexHTML = require('html-webpack-plugin');
const indexHTMLPlugin = new indexHTML({
  hash: true,
  template: 'src/index.html',
  filename: '../public/index.html',
  title: 'Client App'
});

module.exports = {
  mode: 'development',
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, '..', 'public'),
    filename: 'bundle-[hash].js'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx']
  },
  module: {
    rules: [
      { test: /\.tsx?$/, loader: 'ts-loader' },
      { test: /\.css$/, loader: ['style-loader', 'css-loader'] }
    ]
  },
  plugins: [indexHTMLPlugin]
};
