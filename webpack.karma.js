const path = require('path')

module.exports = {
  resolve: {
    modules: ['node_modules', path.resolve(__dirname, 'src')],
    extensions: ['.js', '.json', '.css', '.html', '.styl']
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /^chai/,
        loader: 'null-loader'
      },
      {
        test: /\.html$/,
        loader: 'html-loader'
      },
      {
        test: /\.css$/,
        loaders: ['style-loader', 'css-loader']
      },
      {
        test: /\.styl$/,
        loaders: ['style-loader', 'css-loader', 'stylus-loader']
      },
      {
        test: /\.js$/,
        use: {
          loader: 'istanbul-instrumenter-loader',
          options: { esModules: true }
        },
        enforce: 'post',
        exclude: /node_modules|\.(spec|test)\.js$/,
        include: path.resolve('src')
      }
    ]
  }
}
