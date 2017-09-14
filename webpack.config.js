var webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: "./src/scripts/app.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "App.js"
  },
  plugins: [
         new webpack.ProvidePlugin({
             $: "jquery",
             jQuery: "jquery",
             "window.jQuery": "jquery"
         })
     ],
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        },
        test: /\.js$/,
        exclude: /node_modules/
      }
    ]
  }
}
