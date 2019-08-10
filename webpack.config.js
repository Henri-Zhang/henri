const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.[hash].js',
    chunkFilename: '[id].chunk.[hash].js',
    path: path.resolve('dist')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: /src/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react']
            }
          }
        ]
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          { loader: 'css-loader', options: { modules: true } }
        ]
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          { loader: 'css-loader', options: { modules: true } },
          'sass-loader'
        ]
      },
      {
        test: /\.(jpe?g|png|svg|ttf|pdf|mov)$/,
        use: ['file-loader']
      }
    ]
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      maxSize: 244 * 1024,
      name: true
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.ejs',
      favicon: './src/asserts/favicon.ico',
      hash: true
    })
  ],
  devServer: {
    historyApiFallback: true,
    host: '0.0.0.0',
    useLocalIp: true,
    open: true,
    quiet: true,
    progress: true,
    compress: true,
    port: 9000,
    overlay: {
      warnings: true,
      errors: true
    }
  }
};
