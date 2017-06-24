'use strict'; // eslint-disable-line

const webpack = require('webpack');
const UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
const env = require('yargs').argv.env;
const pkg = require('./package.json');

const libraryName = 'immutableArrays';

const banner = `${pkg.name} - ${pkg.description}\n
@version v${pkg.version}
@author ${pkg.author}
@homepage ${pkg.homepage}
@repository ${pkg.repository.url}`;

let outputFile;

const plugins = [
  new webpack.BannerPlugin(banner)
];

if (env === 'build') {
  plugins.push(new UglifyJsPlugin({minimize: true, sourceMap: true}));
  outputFile = `${libraryName}.min.js`;
} else {
  outputFile = `${libraryName}.js`;
}

const config = {
  entry: `${__dirname}/src/index.js`,
  devtool: 'source-map',
  output: {
    path: `${__dirname}/lib`,
    filename: outputFile,
    library: libraryName,
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  module: {
    rules: [
      {
        test: /(\.jsx|\.js)$/,
        loader: 'babel-loader',
        exclude: /(node_modules|bower_components)/
      },
      {
        test: /(\.jsx|\.js)$/,
        loader: 'eslint-loader',
        exclude: /(node_modules|bower_components)/
      }
    ]
  },
  plugins: plugins
};

module.exports = config;
