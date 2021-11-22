const PATH = require('./PATH');
const PathAliasPlugin = require('tsconfig-paths-webpack-plugin');
const { resolve } = require('path');

const common = {
  mode: 'none',
  entry: PATH.ENTRYPOINT,
  context: PATH.SOURCE,
  target: 'web',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        include: PATH.SOURCE,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                ['@babel/preset-env', {
                  "modules": false
                }],
                '@babel/preset-react',
                '@babel/preset-typescript'
              ],
              plugins: [
                ['@babel/transform-runtime', {
                  regenerator: true
                }],
                "@babel/plugin-proposal-class-properties",
                [
                  'babel-plugin-import',
                  {
                    'libraryName': '@material-ui/core',
                    'libraryDirectory': 'esm',
                    'camel2DashComponentName': false
                  },
                  'core'
                ],
                [
                  'babel-plugin-import',
                  {
                    'libraryName': '@material-ui/icons',
                    'libraryDirectory': 'esm',
                    'camel2DashComponentName': false
                  },
                  'icons'
                ]
              ]
            }
          }
        ]
      },
      {
        test: /\.js$/,
        enforce: 'pre',
        use: ['source-map-loader']
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ]
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
    plugins: [
      new PathAliasPlugin({
        configFile: resolve(PATH.ROOT, 'tsconfig.json')
      }),
    ]
  },
  ignoreWarnings: [/Failed to parse source map/],
};

module.exports = common;
