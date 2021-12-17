const path = require('path');

module.exports = {
  // Specify the entry point for our app.
  entry: [path.join(__dirname, '/src/app.local.js')],
  // Specify the output file containing our bundled code
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'app.js'
  },
  mode: 'production',
  optimization: {
    minimize: false,
  },
  module: {
  },
  resolve: {
    modules: ['node_modules'],
    extensions: ['.js', '.json'],
  },
  target: 'node'
};