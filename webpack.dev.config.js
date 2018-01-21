var path = require('path');
var fs = require('fs');
var webpack = require('webpack');

fs.mkdir("./public/js", function () {});

module.exports = {
  context: __dirname,
  entry: [
    './client/App.jsx'
  ],

  output: {
    path: __dirname + '/public/js',
    publicPath: '/js/',
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    loaders: [
      { test: /\.js[x]?$/, include: path.resolve(__dirname, 'client'), exclude: /node_modules/, loader: 'babel-loader' },
      {
        test: /\.scss/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'sass-loader',
          },
        ],
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000,
            },
          },
        ],
      },
    ]
  },
  devServer: {
    host: '0.0.0.0',
    hot: true,
    port: '3001',
    contentBase: path.join(__dirname, 'public'),
  }
};