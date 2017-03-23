const webpack = require('webpack');
const pkg = require('./package.json');
var path = require('path');

module.exports = function () {

  return {
      context: path.join(__dirname),
      entry: {
          plugin: './lib/plugin/index.js'
      },
      devtool: 'cheap-source-map',
      output: {
        path: path.join(__dirname),
        filename: './dist/[name].js',
        libraryTarget: 'umd',
        library: 'FetchWorker'
      },

      externals: [
          'react',
          'react-dom',
          'whatwg-fetch'
      ],

      resolve: {
        extensions: [
            '.webpack-loader.js',
            '.web-loader.js',
            '.loader.js',
            '.js',
            '.jsx',
            '.scss',
            '.css'
        ],
        modules: [
            path.resolve(__dirname, 'node_modules'),
            path.join(__dirname)
        ]
      },

      plugins: [
        new webpack.DefinePlugin({
            VERSION: JSON.stringify(pkg.version)
        }),
        new webpack.ProvidePlugin({}),
        new webpack.LoaderOptionsPlugin({
            minimize: false,
            debug: true
        }),
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: true,
            compress: {
                warnings: false,
                screw_ie8: true,
                conditionals: true,
                unused: true,
                comparisons: true,
                sequences: true,
                dead_code: true,
                evaluate: true,
                if_return: true,
                join_vars: true,
                drop_debugger: true,
                booleans: true,
                loops: true,
                drop_console: true
            },
            output: {
                comments: false
            }
        })
      ],

      module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: [
                    /node_modules/
                ],

                use: [
                    {
                        loader: 'babel-loader'
                    }
                ]
            }
        ]
      },

      performance: false,

      stats: {
          colors: {
              green: '\u001b[32m'
          }
      }
  }
};
