const path = require("path");

module.exports = {
  mode: 'development',
  entry: "./src/index.js",
  devServer: {
    contentBase: path.join(__dirname, 'lib'),
    compress: true,
    port: 9000
  },
  output: {
    path: path.resolve(__dirname, "lib"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"]
          }
        }
      }
    ]
  }
};