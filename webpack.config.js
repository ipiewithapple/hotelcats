const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const autoprefixer = require('autoprefixer');
const fs = require('fs');
const PAGES_DIR = `./src/pug/pages/`;
const PAGES = fs.readdirSync(PAGES_DIR).filter(fileName => fileName.endsWith('.pug'));

module.exports = {
  entry: [
    './src/js/index.js',
    './src/scss/style.scss'
  ],
  output: {
    filename: './js/script.js'
  },
  devServer: {
    overlay: true,
  },
  devtool: "source-map",
  module: {
    rules: [{
      test: /\.js$/,
      include: path.resolve(__dirname, 'src/js'),
      use: {
        loader: 'babel-loader',
        options: {
          presets: [
            ['@babel/preset-env', {
              modules: false
            }],
          ],
          plugins: ['@babel/plugin-proposal-class-properties'],
        }
      }
    },
    {
      test: /\.(sass|scss)$/,
      include: path.resolve(__dirname, 'src/scss'),
      use: [{
        loader: MiniCssExtractPlugin.loader,
        options: {}
      },
      {
        loader: "css-loader",
        options: {
          sourceMap: true,
          url: false
        }
      },
      {
        loader: 'postcss-loader',
        options: {
          ident: 'postcss',
          sourceMap: true,
          plugins: () => [
            autoprefixer(),
            require('cssnano')({
              preset: ['default', {
                discardComments: {
                  removeAll: true,
                },
              }]
            })
          ]
        }
      },
      {
        loader: "sass-loader",
        options: {
          sourceMap: true
        }
      }
      ]
    },
    {
      test: /\.pug$/,
      loader: 'pug-loader'
    }
    ]
  },
  plugins: [
    ...PAGES.map(page => new HtmlWebpackPlugin({
      template: `${PAGES_DIR}/${page}`,
      filename: `./${page.replace(/\.pug/,'.html')}`
    })),
    new MiniCssExtractPlugin({
      filename: "./css/style.css"
    }),
    new CopyWebpackPlugin([
      {
        from: './src/img',
        to: './img'
      }
    ]),
  ]
};
