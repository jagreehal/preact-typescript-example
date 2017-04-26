var path = require("path");

module.exports = {
  entry: "./src",
  output: {
    path: path.join(__dirname, "build"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.tsx?/i,
        loader: "ts-loader",
        exclude: path.join(__dirname, 'node_modules')
      }
    ]
  },
  resolve: {
    extensions: ['.json', '.ts', '.tsx', '.js', '.jsx']
  },
  devtool: "source-map",

  devServer: {
    // serve up any static files from src/
    contentBase: path.join(__dirname, "src"),

    // enable gzip compression:
    compress: true,

    // enable pushState() routing, as used by preact-router et al:
    historyApiFallback: true
  }
};
