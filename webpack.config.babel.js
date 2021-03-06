import path from 'path';
import CopyWebpackPlugin from 'copy-webpack-plugin';

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
      Utils: path.resolve(__dirname, 'src/utils/'),
      Constants: path.resolve(__dirname, 'src/constants/')
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

  plugins: [
    new CopyWebpackPlugin([
        { 
          from: './src/components/popup/index.html',
          to: './popup.html' 
        },
        { 
          from: './manifest.json'
        },
        { 
          from: './src/styles/*.css',
          flatten: true
        },
        { 
          from: './src/img/*',
          flatten: true
        },
        { 
          from: './lib/*',
          flatten: true
        },
      ])
  ],

  stats: "minimal",
};
