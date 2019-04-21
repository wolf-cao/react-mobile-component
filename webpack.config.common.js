const pxtorem = require('postcss-pxtorem')
const autoprefixer = require('autoprefixer')

const config = {
  resolve: {
    alias: {
      react: 'react/cjs/react.production.min.js',
      'react-dom': 'react-dom/cjs/react-dom.production.min.js'
    }
  },
  module: {
    rules: [
      {
        test: /\.(eot|svg|ttf|woff)$/,
        use: [
          {
            loader: 'file-loader',
            options: {}
          }
        ]
      },
      {
        test: /\.js$/,
        loader: require.resolve('babel-loader')
      },
      {
        test: /\.(css|less)$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: () => [
                pxtorem({
                  rootValue: 100,
                  propWhiteList: []
                }),
                require('postcss-flexbugs-fixes'),
                autoprefixer({
                  browsers: [
                    'iOS >= 7',
                    'Android >= 4',
                    '>1%',
                    'Firefox ESR',
                    'not ie < 9'
                  ],
                  flexbox: true
                })
              ]
            }
          },
          {
            loader: 'less-loader',
            options: { javascriptEnabled: true }
          }
        ]
      }
    ]
  }
}

module.exports = config
