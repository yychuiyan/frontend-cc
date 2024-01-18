const head = require('./config/head');
const plugins = require('./config/plugins');
const themeConfig = require('./config/themeConfig');
module.exports = {
  title: '夜雨炊烟',
  description: '做一个决定，并不难，难的是付诸行动，并且坚持到底。',
  base: '/vblogs/',
  locales: {
    '/': {
      lang: 'zh-CN',
    },
  },
  markdown: {
    lineNumbers: true,
  },
  head,
  themeConfig,
  plugins,
};
