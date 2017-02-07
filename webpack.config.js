const path = require('path');

module.exports = {
  entry: [
    'babel-polyfill',
    './src/components/event/index.js',
    './src/components/popup/index.jsx'
  ],

  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'build'),
    publicPath: '/'
  },

  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    modules: ['node_modules'],
  },

  module: {
    rules: [
      {
        test: /\.(jsx|js)?$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['es2015', 'react'],
            }
          }
        ],
        exclude: /(node_modules)/,
        include: path.join(__dirname, 'src')
      },
    ],
  },
};
