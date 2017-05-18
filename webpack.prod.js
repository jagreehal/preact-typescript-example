const BabiliPlugin = require("babili-webpack-plugin");
const Merge = require("webpack-merge");
const CommonConfig = require("./webpack.common");
const webpack = require('webpack');

const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = function(env) {
  return Merge(CommonConfig, {
    node: {
      fs: "empty"
    },
    plugins: [
      new CopyWebpackPlugin([
         { from: 'src/index.html'},
      ]),
      new webpack.DefinePlugin({
        "process.env": {
          NODE_ENV: JSON.stringify("production")
        }
      }),
      new BabiliPlugin()
    ]
  });
};
