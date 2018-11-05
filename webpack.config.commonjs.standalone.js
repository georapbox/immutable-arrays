/**
 * Webpack configuration for exporting the library's methods as standalone functions in CommonJS format.
 * Al functions are exported under `dist/commonjs/` directory.
 */

const webpack = require('webpack');
const pkg = require('./package.json');

const banner = `${pkg.name}/[name]
${pkg.description}\n
@version v${pkg.version}
@author ${pkg.author}
@homepage ${pkg.homepage}
@repository ${pkg.repository.url}`;

const plugins = [
  new webpack.BannerPlugin(banner)
];

module.exports = {
  entry: {
    del: `${__dirname}/src/del.js`,
    pop: `${__dirname}/src/pop.js`,
    push: `${__dirname}/src/push.js`,
    reverse: `${__dirname}/src/reverse.js`,
    shift: `${__dirname}/src/shift.js`,
    sort: `${__dirname}/src/sort.js`,
    splice: `${__dirname}/src/splice.js`,
    unshift: `${__dirname}/src/unshift.js`
  },
  output: {
    path: `${__dirname}/dist/commonjs`,
    filename: '[name].js'
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
