const pxtorem = require('postcss-pxtorem')

module.exports = {
  plugins: [
    require('postcss-flexbugs-fixes'),
    pxtorem({
      rootValue: 100,
      propWhiteList: []
    }),
    require('postcss-pxtorem'),
    require('autoprefixer')({ browsers: ['iOS>7', 'Android>4'] })
  ]
}
