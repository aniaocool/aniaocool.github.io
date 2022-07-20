const CompressionWebpackPlugin = require('compression-webpack-plugin')
const productionGzipExtensions = ['js', 'css']
const path = require('path');
function resolve (dir) {
  //此处使用path.resolve 或path.join 可自行调整
  return path.join(__dirname, dir)
}
module.exports = {
  publicPath:'./',
  pages:{
    index:{
      entry: 'src/main.js',
      title:'阿鸟的麻将教室'
    }
  },
  outputDir: "docs2",
  productionSourceMap: true, // 构建处理前代码和处理后代码之间的桥梁，方便开发人员的错误定位。
  lintOnSave: process.env.NODE_ENV !== 'production', // 是否在开发环境下通过 eslint-loader 在每次保存时 lint 代码
  devServer: {
    port:8000,  // 端口
    open:true,   // 自动打开浏览器
    compress: true, // 启动开发环境 gzip 压缩？（没用）
    progress: true,  // 显示打包的进度条
  },
  configureWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      // 为生产环境修改配置...
      config.plugins.push(
        new CompressionWebpackPlugin({
          filename: '[path].gz[query]',
          algorithm: 'gzip',
          test: new RegExp('\\.(' + productionGzipExtensions.join('|') + ')$'),
          threshold: 1024, //byte 1kb 大于该值的资源才会被处理
          minRatio: 0.9, //只有压缩率小于这个值的资源才会被处理
          deleteOriginalAssets: false //删除原文件
        })
      )
    }
    //设置别名
    config.resolve.alias['@dd'] = resolve('src/assets')

    //ts支持
    config.resolve.extensions = [".ts", ".tsx", ".js", ".json"]

    config.module.rules.push({
      test: /\.tsx?$/,
      loader: 'ts-loader',
      exclude: /node_modules/,
      options: {
        appendTsSuffixTo: [/\.vue$/],
      }
    })
  }
}