const path = require('path').resolve

const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: {
    index: path(__dirname, '.', 'src', 'index.tsx')
  },
  output: {
    filename: 'bundle.js',
    path: path(__dirname, '.', 'build')
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx']
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'ts-loader'
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path(__dirname, '.', 'public', 'index.html')
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path(__dirname, '.', 'public', 'assets'),
          to: path(__dirname, '.', 'build', 'assets')
        }
      ]
    })
  ]
}
