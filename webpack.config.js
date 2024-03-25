const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
module.exports = {
  mode: "development",
  entry: "./src/index.js",

<<<<<<< HEAD
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
    new CopyPlugin({
      patterns: [
        { from: "src/images", to: "images" }, // Replace with your image folder paths
      ],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.scss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
=======
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
>>>>>>> 167a4e55a73f3c95e395aa46c77016269562cdd7
    ],
  },
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
};
