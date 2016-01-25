var HtmlWebpackPlugin = require('html-webpack-plugin')

var htmlMinifiedOptions = {
  collapseWhitespace: true,
  removeRedundantAttributes: true
};

var htmlWebpackOptions = {
  title: 'Iomante',
  minify: htmlMinifiedOptions,
  hash: true,
  template: 'src/index.html',
  inject: 'body'
};

module.exports = {
  entry: './src/main.js',
  output: {
    path: 'dist',
    filename: 'iomante.js'
  },
  plugins: [
    new HtmlWebpackPlugin(htmlWebpackOptions)
  ],
  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: 'style!css'
      }
    ]
  }
};