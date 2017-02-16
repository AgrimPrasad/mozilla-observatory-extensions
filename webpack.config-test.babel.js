import path from 'path';
import nodeExternals from 'webpack-node-externals';

module.exports = {
  output: {
    // use absolute paths in sourcemaps (important for debugging via IDE)
    devtoolModuleFilenameTemplate: '[absolute-resource-path]',
    devtoolFallbackModuleFilenameTemplate: '[absolute-resource-path]?[hash]'
  },
  
  target: 'node',  // webpack should compile node compatible code
  
  externals: [nodeExternals()], // in order to ignore all modules in node_modules folder
  
  devtool: "inline-cheap-module-source-map",
  
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
      },
    ],
  },
};
