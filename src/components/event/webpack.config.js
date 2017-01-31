const path = require('path');

module.exports = {

  entry: [
    './src/components/event/src/index.js',
  ],

  output: {
    filename: 'event.js',
    path: path.join(__dirname, '../../../', 'build'),
  },

  resolve: {
    extensions: ['', '.js', '.json'],
    modulesDirectories: ['node_modules'],
  },

  module: {
    loaders: [
      {
        test: /\.(js)?$/,
        loader: 'babel',
        exclude: /(node_modules)/,
        include: path.join(__dirname, 'src'),
        query: {
          presets: ['es2015', 'react'],
        },
      },
    ],
  },
};
