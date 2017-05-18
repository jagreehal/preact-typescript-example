var path = require("path");
const Merge = require("webpack-merge");
const CommonConfig = require("./webpack.common");

module.exports = function(env) {
  return Merge(CommonConfig, {
    devtool: 'cheap-eval-source-map',

    devServer: {
      // serve up any static files from src/
      contentBase: path.join(__dirname, "src"),

      // enable gzip compression:
      compress: true,

      // enable pushState() routing, as used by preact-router et al:
      historyApiFallback: true
    }
  });
};
