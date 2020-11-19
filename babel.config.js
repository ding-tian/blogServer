// 这个项目发布阶段需要用到的 babel 插件
const prodPlugins = []
// 处于产品发布模式
if (process.env.NODE_ENV === 'production') {
  // transform-remove-console 移除console.log
  prodPlugins.push('transform-remove-console')
}
module.exports = {
  presets: ['@vue/cli-plugin-babel/preset'],
  plugins: [
    [
      'component',
      {
        libraryName: 'element-ui',
        styleLibraryName: 'theme-chalk'
      }
    ],
    '@babel/plugin-syntax-dynamic-import',
    ...prodPlugins
  ]
}
