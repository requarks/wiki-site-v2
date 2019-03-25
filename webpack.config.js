const webpack = require('webpack')
const path = require('path')
const fs = require('fs-extra')

const DEV = process.env.NODE_ENV === 'development'

const CleanWebpackPlugin = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const HtmlWebpackIncludeAssetsPlugin = require('html-webpack-include-assets-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const SimpleProgressWebpackPlugin = require('simple-progress-webpack-plugin')
const WriteFilePlugin = require('write-file-webpack-plugin')

const babelConfig = fs.readJsonSync(path.join(process.cwd(), '.babelrc'))
const cacheDir = '.webpack-cache/cache'
const babelDir = path.join(process.cwd(), '.webpack-cache/babel')

process.noDeprecation = true

const meta = {
  'charset': 'utf-8',
  'viewport': 'user-scalable=yes, width=device-width, initial-scale=1, maximum-scale=5',
  'apple-mobile-web-app-title': 'Wiki.js',
  'application-name': 'Wiki.js',
  'msapplication-TileColor': '#603cba',
  'msapplication-config': '/favicons/browserconfig.xml',
  'theme-color': '#ffffff'
}

module.exports = {
  mode: DEV ? 'development' : 'production',
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
    host: 'dev.ngpixel.com',
    historyApiFallback: {
      rewrites: [
        { from: /^\/$/, to: '/index.html' },
        { from: /^\/about/, to: '/about.html' },
        { from: /^\/cloud/, to: '/cloud.html' },
        { from: /^\/newsletter/, to: '/newsletter.html' },
        { from: /./, to: '/404.html' }
      ]
    }
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
          DEV ? 'style-loader' : MiniCssExtractPlugin.loader,
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
          DEV ? 'style-loader' : MiniCssExtractPlugin.loader,
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
      { from: 'src/vendors', to: 'vendors' },
      { from: 'src/favicons', to: 'favicons' },
      { from: 'src/favicon.ico', to: 'favicon.ico' }
    ], {}),
    new MiniCssExtractPlugin({
      filename: DEV ? 'css/bundle.css' : 'css/bundle.[hash].css',
      chunkFilename: DEV ? 'css/[name].css' : 'css/[name].[chunkhash].css'
    }),
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      filename: 'index.html',
      meta,
      hash: !DEV,
      inject: true
    }),
    new HtmlWebpackPlugin({
      template: 'src/about.html',
      filename: 'about.html',
      meta,
      hash: !DEV,
      inject: true
    }),
    new HtmlWebpackPlugin({
      template: 'src/cloud.html',
      filename: 'cloud.html',
      meta,
      hash: !DEV,
      inject: true
    }),
    new HtmlWebpackPlugin({
      template: 'src/newsletter.html',
      filename: 'newsletter.html',
      meta,
      hash: !DEV,
      inject: true
    }),
    new HtmlWebpackPlugin({
      template: 'src/404.html',
      filename: '404.html',
      meta,
      hash: !DEV,
      inject: true
    }),
    new HtmlWebpackIncludeAssetsPlugin({
      cssExtensions: ['.css', '.png', '.ico', '.svg', '.webmanifest'],
      assets: [
        { path: 'favicons/apple-touch-icon.png', attributes: { rel: 'apple-touch-icon', sizes: '180x180' }},
        { path: 'favicons/favicon-32x32.png', attributes: { rel: 'icon', type: 'image/png', sizes: '32x32' }},
        { path: 'favicons/favicon-16x16.png', attributes: { rel: 'icon', type: 'image/png', sizes: '16x16' }},
        { path: 'favicons/site.webmanifest', attributes: { rel: 'manifest' }},
        { path: 'favicons/safari-pinned-tab.svg', attributes: { rel: 'mask-icon', color: '#7444fd' }},
        { path: 'favicon.ico', attributes: { rel: 'shortcut icon' }},
        'js/jquery-3.2.1.min.js',
        'js/propper.js',
        'js/bootstrap.min.js',
        'vendors/wow/wow.min.js',
        'vendors/sckroller/jquery.parallax-scroll.js',
        'vendors/imagesloaded/imagesloaded.pkgd.min.js',
        'js/plugins.js',
        'js/main.js'
      ],
      append: false
    }),
    new SimpleProgressWebpackPlugin({
      format: DEV ? 'compact' : 'expanded'
    }),
    new CleanWebpackPlugin([
      'dist/**/*.*'
    ], {
      root: process.cwd(),
      verbose: false
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(DEV ? 'development' : 'production')
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
  watch: DEV
}
