module.exports = {
  css: {
    modules: true,
    loaderOptions: {
      css: {
        localIdentName: '[name]__[local]_[hash:base64:8]',
        camelCase: false,
      }
    }
  }
}