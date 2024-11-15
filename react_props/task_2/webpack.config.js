const path = require('path');

module.exports = {
  entry: './src/index.js', 
  output: {
    path: path.resolve(__dirname, '../dist'), 
    filename: 'bundle.js', 
  },
  mode: 'development',
  devServer: {
    static: path.resolve(__dirname, '../dist'), 
    port: 3000, 
    hot: true, 
    open: true, 
  },
  module: {
    rules: [
      {
        test: /\.css$/, 
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/i, 
        type: 'asset/resource',
        use: [
          {
            loader: 'image-webpack-loader', 
            options: {
              bypassOnDebug: true,
              disable: true, 
            },
          },
        ],
      },
    ],
  },
  devtool: 'inline-source-map', 
};
