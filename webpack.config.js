const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  mode: "development",
  stats: {
    errorDetails: true,
  },
  entry: "./index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.bundle.js",
  },
  resolve: {
    extensions: [".js"],
  },
  module: {},
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html",
    }),
  ],
};
