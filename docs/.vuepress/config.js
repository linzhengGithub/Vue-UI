module.exports = {
  base:'/Vue-UI/',
  title: '车仑 UI',
  description: '一个好用易上手的UI框架',
  themeConfig: {
    nav: [
      {text: '主页', link: '/'},
      {text: '文档', link: '/components/layout'},
      {text: 'Github', link: 'https://github.com/linzhengGithub'},
    ],
    sidebar: [
      {
        title: '介绍',
        children: [
          '/presentation/',
          ]
      },
      {
        title: '组件',
        children: [
          '/components/layout',
          '/components/grid',
          '/components/input',
          '/components/button',
          '/components/tabs',
          '/components/toast',
          '/components/popover',
          '/components/collapse',
        ]
      }
    ],
  }
}
