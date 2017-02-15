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
    alias: {
      Actions: path.resolve(__dirname, 'src/actions/'),
      Aliases: path.resolve(__dirname, 'src/aliases/'),
      Components: path.resolve(__dirname, 'src/components/'),
      Img: path.resolve(__dirname, 'src/img/'),
      Reducers: path.resolve(__dirname, 'src/reducers/'),
      Styles: path.resolve(__dirname, 'src/styles/'),
      Lib: path.resolve(__dirname, 'lib/'),
      Tests: path.resolve(__dirname, 'tests/'),
    },
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
