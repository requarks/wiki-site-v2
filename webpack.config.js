const webpack = require('webpack')
const path = require('path')
const fs = require('fs-extra')

const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const SimpleProgressWebpackPlugin = require('simple-progress-webpack-plugin')
const SriWebpackPlugin = require('webpack-subresource-integrity')
const WriteFilePlugin = require('write-file-webpack-plugin')

const babelConfig = fs.readJsonSync(path.join(process.cwd(), '.babelrc'))
const cacheDir = '.webpack-cache/cache'
const babelDir = path.join(process.cwd(), '.webpack-cache/babel')

process.noDeprecation = true

module.exports = {
  mode: 'development',
  entry: {
    app: ['./src/scss/style.scss'],
  },
  output: {
    path: path.join(process.cwd(), 'dist'),
    publicPath: '/',
    filename: 'js/[name].js',
    chunkFilename: 'js/[name].js',
    globalObject: 'this',
    pathinfo: true,
    crossOriginLoading: 'use-credentials'
  },
  devServer: {
    contentBase: './dist',
    port: 8080,
    host: 'dev.ngpixel.com'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'cache-loader',
            options: {
              cacheDirectory: cacheDir
            }
          },
          {
            loader: 'babel-loader',
            options: {
              ...babelConfig,
              cacheDirectory: babelDir
            }
          }
        ]
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader'
        ]
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'cache-loader',
            options: {
              cacheDirectory: cacheDir
            }
          },
          'style-loader',
          'css-loader',
          'postcss-loader',
          {
            loader: 'sass-loader',
            options: {
              sourceMap: false
            }
          }
        ]
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192
            }
          }
        ]
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'svg/'
            }
          }
        ]
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        exclude: [
          path.join(process.cwd(), 'client')
        ],
        use: [{
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'fonts/'
          }
        }]
      }
    ]
  },
  plugins: [
    new CopyWebpackPlugin([
      { from: 'src/css', to: 'css' },
      { from: 'src/img', to: 'img' },
      { from: 'src/svg', to: 'svg' },
      { from: 'src/js', to: 'js' },
      { from: 'src/vendors', to: 'vendors' }
    ], {}),
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      filename: 'index.html',
      hash: false,
      inject: true
    }),
    new SimpleProgressWebpackPlugin({
      format: 'compact'
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    }),
    new WriteFilePlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.WatchIgnorePlugin([
      /node_modules/
    ])
  ],
  resolve: {
    mainFields: ['browser', 'main', 'module'],
    symlinks: true,
    alias: {
      '@': path.join(process.cwd(), 'src')
    },
    extensions: [
      '.js',
      '.json'
    ],
    modules: [
      'node_modules'
    ]
  },
  node: {
    fs: 'empty'
  },
  stats: {
    children: false,
    entrypoints: false
  },
  target: 'web',
  watch: true
}
