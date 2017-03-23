const webpack = require('webpack');
const pkg = require('./package.json');
var path = require('path');

module.exports = function () {

  return {
      context: path.join(__dirname),
      entry: {
          main: './lib/main.jsx'
      },
      devtool: 'cheap-source-map',
      output: {
        path: path.join(__dirname),
        filename: './dist/[name].js',
        libraryTarget: 'umd',
        library: 'ReactPlugin'
      },

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
        })
      ],

      module: {
        rules: [
            {
                test: /\.(scss|sass|css)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'style-loader',
                        options: {
                            useable: true
                        }
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            localIdentName: '[path][name]__[local]--[hash:base64:5]'
                        }
                    },
                    'sass-loader'
                ]
            },
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
      },

      devServer: {
            contentBase: './',
            historyApiFallback: true,
            compress: false,
            stats: {
                assets: true,
                children: false,
                chunks: false,
                hash: false,
                modules: false,
                publicPath: false,
                timings: true,
                version: false,
                warnings: true,
                colors: {
                    green: '\u001b[32m'
                }
            }
      }
  }
};
