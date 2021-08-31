/*
 * @Author: your name
 * @Date: 2021-08-24 11:38:39
 * @LastEditTime: 2021-08-25 14:47:48
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \SCRM-Admin-Webd:\work\project\notes\build\webpack.base.js
 */
const path = require('path')

module.exports = {
  target: "node",
  // 
  mode: "production", // "production" | "development" | "none"
  // Chosen mode tells webpack to use its built-in optimizations accordingly.
  entry: "../src/main", // string | object | array
  // 默认为 './src'
  // 这里应用程序开始执行
  // webpack 开始打包
  output: {
    // webpack 如何输出结果的相关选项
    path: path.resolve(__dirname, "../dist"), // string
    // 所有输出文件的目标路径
    // 必须是绝对路径（使用 Node.js 的 path 模块）
    filename: "bundle.js", // string
    // 「入口分块(entry chunk)」的文件名模板
    publicPath: "/assets/", // string
    // 输出解析文件的目录，url 相对于 HTML 页面
    library: "MyLibrary", // string,
    // 导出库(exported library)的名称
    libraryTarget: "umd", // 通用模块定义
    // 导出库(exported library)的类型
    /* 高级输出配置（点击显示） */
  },
  fallback: {
    // crypto: require.resolve('crypto-browserify'),
    path: require.resolve('path-browserify'),
    // url: require.resolve('url'),
    // buffer: require.resolve('buffer/'),
    // util: require.resolve('util/'),
    // stream: require.resolve('stream-browserify/'),
    // vm: require.resolve('vm-browserify')
  },
  // resolve: {
  //   fallback: {
  //     "path": false
  //   },
  //   // 用于查找模块的目录
  //   extensions: [".js", ".json", ".jsx", ".css"]
  // },
  // devtool: "source-map", // enum
  // // 通过在浏览器调试工具(browser devtools)中添加元信息(meta info)增强调试
  // // 牺牲了构建速度的 `source-map' 是最详细的。
  // context: __dirname, // string（绝对路径！）
  // // webpack 的主目录
  // // entry 和 module.rules.loader 选项
  // // 相对于此目录解析
  // // bundle 应该运行的环境
  // // 更改 块加载行为(chunk loading behavior) 和 可用模块(available module)
  // externals: ["react", /^@angular\//],
  // // 不要遵循/打包这些模块，而是在运行时从环境中请求他们
  // serve: { //object
  //   port: 1337,
  //   content: './dist',
  //   // ...
  // },
  // // 为 webpack-serve 提供选项
  // stats: "errors-only",
  // // 精确控制要显示的 bundle 信息
  // devServer: {
  //   proxy: { // proxy URLs to backend development server
  //     '/api': 'http://localhost:3000'
  //   },
  //   contentBase: path.join(__dirname, 'public'), // boolean | string | array, static file location
  //   compress: true, // enable gzip compression
  //   historyApiFallback: true, // true for index.html upon 404, object for multiple paths
  //   hot: true, // hot module replacement. Depends on HotModuleReplacementPlugin
  //   https: false, // true for self-signed, object for cert authority
  //   noInfo: true, // only errors & warns on hot reload
  //   // ...
  // },
  // plugins: [
  //   // ...
  // ],
  // 附加插件列表
  /* 高级配置（点击展示） */
}