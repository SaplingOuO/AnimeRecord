// const { defineConfig } = require('@vue/cli-service')
// module.exports = defineConfig({
//   transpileDependencies: true
// })

module.exports = ({
  publicPath: process.env.NODE_ENV === 'production'
  ? '/AnimeRecord/'
  : './',
  // publicPath: './',
  // outputDir:'./dist',
  // assetsDir:'./static',
  // filenameHashing: false,
  // transpileDependencies: true,
})