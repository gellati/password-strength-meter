//import path from 'path';
WriteFilePlugin = require('write-file-webpack-plugin');

module.exports = {
  entry: "./src/renderer.js",
  output: {
    path: __dirname,
    filename: "./dist/bundle.js",
    publicPath: "./dist/"
  },
  watch: true,
  plugins: [
          new WriteFilePlugin()
  ],
  module: {
      loaders: [{
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        include: __dirname,
        query: {
          presets: [ 'es2015', 'react' ]
        }
      }]
    }
  }
