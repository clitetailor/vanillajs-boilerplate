const path = require('path')

const config = {
  entry: {
    index: './src/index'
  },

  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].js'
  },

  context: __dirname,

  resolve: {
    modules: ['node_modules', path.resolve(__dirname, 'src')],
    extensions: ['.js', '.json', '.css', '.html', '.styl']
  }
}

module.exports = config
