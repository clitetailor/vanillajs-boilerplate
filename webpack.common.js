const path = require('path')

const config = {
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].[hash].js'
  },

  context: __dirname,

  resolve: {
    modules: ['node_modules', path.resolve(__dirname, 'src')],
    extensions: ['.js', '.json', '.css', '.html', '.styl']
  }
}

module.exports = config
