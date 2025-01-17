const path = require('path');

module.exports = {
  mode: 'production',
  entry: path.join(__dirname, '/jsx/index.jsx'),
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, '/public')
  },
  module: {
    rules: [{
      test: /\.jsx$/,
      exclude: /node_modules/,
      use: [{
        loader: 'babel-loader',
        options: {
          presets: ['@babel/env', '@babel/react']
        }
      }]
    }]
  }
};
