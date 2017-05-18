// https://github.com/jch254/starter-pack/tree/typescript
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
        test: /\.(tsx|ts)$/,
        use: ["ts-loader"],
        exclude: path.join(__dirname, "node_modules")
      }
    ]
  },
  plugins: [],
  resolve: {
    extensions: [".json", ".ts", ".tsx", ".js", ".jsx"]
  }
};
