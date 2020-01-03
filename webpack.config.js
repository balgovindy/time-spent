const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require('path');
const AntdDayjsWebpackPlugin =require('antd-dayjs-webpack-plugin');

const SRC_DIR = path.resolve(__dirname, 'src')
module.exports = {
  entry: SRC_DIR + '/index.js',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "public/index.html",
      filename: "index.html"
    }),
    new AntdDayjsWebpackPlugin()
  ]
}