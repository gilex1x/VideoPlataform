const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { pathToFileURL } = require('url');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports={
  entry: './src/index.js',
  output:{
    path: path.resolve(__dirname,'dist'),
    filename:'bundle.js'
  },
  resolve: {
    extensions:['.js','.jsx']
  },

  module:{//Inicio de los modulos
      rules:[
        {//Regla 1
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use:{
          loader: "babel-loader"
        }
      },
        {//Regla 2
          test: /\.html$/,
          use: [
            {
              loader:'html-loader'
            }
          ]
        },
        {//Regla 3
          test: /\.(s*)css$/,
          use:[
            {
              loader:MiniCssExtractPlugin.loader
            },
            'css-loader',
            'sass-loader'
          ]
        } 
      
    ]
  },//Fin de los modulos
  plugins:[
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: './index.html'
    }),
    new MiniCssExtractPlugin({
      filename: 'assets/[name].css'
    }),
  ]
}