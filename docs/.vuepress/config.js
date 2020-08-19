module.exports = {
  base:'/Vue-UI/',
  title: '车仑 UI Vue',
  description: '一个好用易上手的UI框架',
  themeConfig: {
    nav: [
      {text: '主页', link: '/'},
      {text: '文档', link: '/guide/'},
      {text: '交流', link: 'https://google.com'},
    ],
    sidebar: [
      {
        title: '组件',
        children: [
          '/components/layout',
          '/components/grid',
          '/components/input',
          '/components/button',
          '/components/toast',
          '/components/popover',
          '/components/collapse'
        ]
      }
    ],
  }
}
