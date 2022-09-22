/*
 * @LastEditors: 丁玉欣
 * @LastEditTime: 2022-09-22 17:07:30
 * @Description: 文件介绍
 */
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  devServer: {
    port: 8001,
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  },
  chainWebpack: config => {
    config.resolve.alias // 为指定目录设置全局别名
      .set('@', path.join(__dirname, 'src'))
  },
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.ts$/,
          loader: 'ts-loader',
          options: { appendTsSuffixTo: [/\.vue$/] }
        },
        {
          test: /\.less$/,
          loader: 'less-loader',
          options: { appendTsSuffixTo: [/\.vue$/] }
        }
      ],
    },
  },
})


const path = require('path')

// module.exports = {
//   transpileDependencies: true,
//   lintOnSave: false,
//   devServer: {
//     port: 8011,
//     headers: {
//       'Access-Control-Allow-Origin': '*'
//     }
//   },
//   chainWebpack: config => {
//     config.resolve.alias // 为指定目录设置全局别名
//       .set('@', path.join(__dirname, 'src'))
//     // const svgRule = config.module.rule('svg')
//     // svgRule.uses.clear()
//     // config.module
//     //   .rule('')
//     //   .test(/\.svg$/)
//     //   .use('svg-sprite-loader')
//     //   .loader('svg-sprite-loader')
//     //   .end()

//   },
//   configureWebpack: {
//     module: {
//       rules: [
//         {
//           test: /\.ts$/,
//           loader: 'ts-loader',
//           options: { appendTsSuffixTo: [/\.vue$/] }
//         },
//         {
//           test: /\.less$/,
//           loader: 'less-loader',
//           options: { appendTsSuffixTo: [/\.vue$/] }
//         }
//       ],
//     },
//   },
// }