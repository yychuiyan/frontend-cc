module.exports = [
  {
    text: '首页',
    link: '/',
    icon: 'reco-home',
  },
  {
    text: '指南',
    link: '/resourceNav/',
    icon: '',
    items: [
      {
        text: '前端工程师手册',
        link: '/document/frontend/introduction/',
        icon: 'reco-document',
      },
      {
        text: '前端学习路线',
        link: '/document/learning-routes/',
        icon: 'reco-document',
      },
    ],
  },
  {
    text: '百炼成神',
    link: '',
    icon: '',
    items: [
      {
        text: '技术日常记录',
        link: '/document/daily-records/introduction/',
        icon: 'reco-document',
      },
      // { text: '周报记录', link: '/document/weekly/introduction/', icon: 'reco-document' },
      { text: '前端面试记录', link: '/document/interview/introduction/', icon: 'reco-document' },
      {
        text: '前端书籍阅读笔记',
        link: '/document/reading-notes/introduction/',
        icon: 'reco-document',
      },
      {
        text: '错误异常记录',
        link: '/document/exception-logging/introduction/',
        icon: 'reco-document',
      },
      {
        text: '业务代码片段',
        link: '/document/business-code/introduction/',
        icon: 'reco-document',
      },
    ],
  },
  {
    text: '星河滚烫',
    link: '',
    icon: '',
    items: [
      { text: '读书笔记', link: '/happiness/books/introduction/', icon: 'reco-document' },
      { text: '生活日常', link: '/happiness/life-records/introduction/', icon: 'reco-document' },
      { text: '网络专栏', link: '/happiness/read/introduction/', icon: 'reco-document' },
    ],
  },
  {
    text: '索引',
    icon: '',
    items: [
      { text: '博客分类', link: '/categories/JavaScript/', icon: 'reco-category' },
      { text: '博客标签', link: '/tag/', icon: 'reco-tag' },
      { text: '博客归档', link: '/timeline/', icon: 'reco-date' },
    ],
  },
  {
    text: '留言板',
    link: '/messages/',
    icon: 'reco-suggestion',
  },
  {
    text: '关于',
    link: '',
    icon: '',
    items: [
      { text: 'GitHub', link: 'https://github.com/zhanghaoju', icon: '' },
      { text: '掘金', link: 'https://juejin.cn/user/149189312651341', icon: '' },
      { text: '语雀', link: 'https://www.yuque.com/yycy', icon: '' },
      { text: '关于', link: '/about/', icon: '' },
    ],
  },
];
