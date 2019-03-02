const webpack = require('webpack')
const path = require('path')
const fs = require('fs-extra')

const CleanWebpackPlugin = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const SimpleProgressWebpackPlugin = require('simple-progress-webpack-plugin')
const SriWebpackPlugin = require('webpack-subresource-integrity')
const WriteFilePlugin = require('write-file-webpack-plugin')

const babelConfig = fs.readJsonSync(path.join(process.cwd(), '.babelrc'))

process.noDeprecation = true

module.exports = {
  mode: 'production',
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
            loader: 'babel-loader',
            options: {
              ...babelConfig
            }
          }
        ]
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader'
        ]
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          MiniCssExtractPlugin.loader,
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
    new MiniCssExtractPlugin({
      filename: 'css/bundle.[hash].css',
      chunkFilename: 'css/[name].[chunkhash].css'
    }),
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      filename: 'index.html',
      hash: true,
      inject: true
    }),
    new SriWebpackPlugin({
      hashFuncNames: ['sha256', 'sha512'],
      enabled: true
    }),
    new SimpleProgressWebpackPlugin({
      format: 'expanded'
    }),
    new CleanWebpackPlugin([
      'dist/**/*.*'
    ], {
      root: process.cwd(),
      verbose: false
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    new WriteFilePlugin()
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
  target: 'web'
}
