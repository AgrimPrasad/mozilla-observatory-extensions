const path = require('path');

module.exports = {
  devtool: 'source-map',
  
  entry: [
    './src/components/event/index.js',
    './src/components/popup/index.jsx',
  ],

  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'build'),
    publicPath: '/'
  },

  resolve: {
    extensions: ['', '.js', '.jsx', '.scss', '.json'],
    modulesDirectories: ['node_modules'],
  },

  module: {
    loaders: [
      {
        test: /\.(jsx|js)?$/,
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
