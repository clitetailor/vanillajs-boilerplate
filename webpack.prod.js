const path = require('path')
const common = require('./webpack.common')
const merge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const ManifestPlugin = require('webpack-manifest-plugin')
const webpack = require('webpack')

// Create multiple instances
const extractCSS = new ExtractTextPlugin('stylesheets/[name]-style.css')
const extractStylus = new ExtractTextPlugin('stylesheets/[name]-stylus.css')

const config = {
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader'
      },
      {
        test: /\.html$/,
        loader: 'html-loader'
      },
      {
        test: /\.css$/,
        use: extractCSS.extract({
          fallback: 'style-loader',
          use: ['css-loader']
        })
      },
      {
        test: /\.styl$/,
        use: extractStylus.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'stylus-loader']
        })
      }
    ]
  },

  plugins: [
    new CleanWebpackPlugin(['build']),
    new ManifestPlugin(),
    extractCSS,
    extractStylus,
    new webpack.optimize.UglifyJsPlugin(),
    new HtmlWebpackPlugin({
      title: 'City Editor',
      filename: 'index.html',
      template: './src/index.html'
    })
  ]
}

module.exports = merge(common, config)
