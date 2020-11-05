const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development", // this will trigger some webpack default stuffs for dev
  entry: "./index.js", // if not set, default path to './src/index.js'. Accepts an object with multiple key-value pairs, with key as your custom bundle filename(substituting the [name]), and value as the corresponding file path
  output: {
    filename: "[name].bundle.js", // [name] will take whatever the input filename is. defaults to 'main' if only a single entry value
    path: path.resolve(__dirname, "dist") // the folder containing you final dist/build files. Default to './dist'
  },
  devServer: {
    historyApiFallback: true, // to make our SPA works after a full reload, so that it serves 'index.html' when 404 response
    stats: "minimal" // default behaviour spit out way too much info. adjust to your need.
  },
  devtool: "source-map", // a sourcemap type. map to original source with line number
  plugins: [new HtmlWebpackPlugin()], // automatically creates a 'index.html' for us with our <link>, <style>, <script> tags inserted! Visit https://github.com/jantimon/html-webpack-plugin for more options
  module: {
    rules: [
      {
        test: /\.css$/, // run the loaders below only on .css files
        // this are the loaders. they interpret files, in this case css. they run from right to left sequence.
        // css-loader: "interprets @import and url() like import/require() and will resolve them."
        // style-loader: "Adds CSS to the DOM by injecting a <style> tag". this is fine for development.
        use: ["style-loader", "css-loader"]
      }
    ]
  }
};