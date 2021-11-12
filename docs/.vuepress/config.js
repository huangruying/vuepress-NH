module.exports = {
  title: '黄汝瑛',
  description: 'HuangRuYing',
  base: '/HRY/',
  // cache: false,
  head: [
    ['link', { rel: 'icon', href: '/head.jpg' }]
  ],
  themeConfig: {
    logo: '/head.jpg',
    // 默认值是 true 。设置为 false 来禁用所有页面的 下一篇 链接
    // nextLinks: false,
    // 默认值是 true 。设置为 false 来禁用所有页面的 上一篇 链接
    // prevLinks: false,
    displayAllHeaders: true,
    nav: [
      { text: '首页', link: '/' },
      { text: '组件', link: '/module/' },
      { text: '方法', link: '/function/' },
      {
        text: '交接文档',
        items: [
          { text: '黄刚', link: '/connect/huangGang' },
          { text: '罗仕星', link: '/connect/luoShiXing' }
        ]
      },
      { text: '联系我', link: '/HuangRuYing/' }
    ],
    sidebar: {
      '/module/': ['', 'serviceChain', 'pagination', 'notification', 'button'],
      '/function/': ['', 'listEcho', 'date'],
      '/connect/': ['', 'huangGang', 'luoShiXing'],
      '/HuangRuYing/': [''],
      '/': ['']
    }
    // sidebar: [
    //   {
    //     title: '首页',
    //     path: '/'
    //   },
    //   {
    //     title: '组件',
    //     // sidebarDepth: 2, // 标题深度
    //     collapsable: false, // 一直展开
    //     children: [
    //       {
    //         title: '分页',
    //         path: '/module'
    //       },
    //       {
    //         title: '跳转服务链',
    //         path: '/serviceChain'
    //       }
    //     ]
    //   },
    //   {
    //     title: '方法',
    //     children: [
    //       {
    //         title: '数据回显',
    //         path: '/function'
    //       }
    //     ]
    //   }
    // ]
  }
}