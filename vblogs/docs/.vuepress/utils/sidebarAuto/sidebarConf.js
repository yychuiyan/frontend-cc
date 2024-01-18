const getDocPath = require('./getDocPath');
module.exports = {
  '/happiness/books/': [
    getDocPath('鸡汤煲', false, '/happiness/books/introduction/'),
    getDocPath('2022年度录', false, '/happiness/books/01-rljs/'),
  ],
  '/happiness/life-records/': [
    getDocPath('鸡汤煲', false, '/happiness/life-records/introduction/'),
    getDocPath('2022年度录', false, '/happiness/life-records/year2022/'),
  ],
  '/happiness/read/': [
    getDocPath('鸡汤煲', false, '/happiness/read/introduction/'),
    getDocPath('2022年度录', false, '/happiness/read/year2022/'),
  ],
  '/document/frontend/': [
    getDocPath('前端工程师手册', false, '/document/frontend/introduction/'),
    getDocPath('HTML必知必会', true, '/document/frontend/html/'),
    getDocPath('CSS必知必会', true, '/document/frontend/css/'),
    getDocPath('HTML/CSS进阶', true, '/document/frontend/html&css-advanced/'),
    getDocPath('JavaScript必知必会', true, '/document/frontend/javascript/'),
    getDocPath('浏览器', true, '/document/frontend/browser/'),
//    getDocPath('JavaScript扩展知识', true, '/document/frontend/javascript-extend/'),
//    getDocPath('React教程', true, '/document/frontend/react/'),
//    getDocPath('Vue教程', true, '/document/frontend/vue/'),
  ],
  '/document/daily-records/': [
    getDocPath('技术日常', false, '/document/daily-records/introduction/'),
    getDocPath('2022年度录', false, '/document/daily-records/year2022/'),
  ],
  '/document/weekly/': [
    getDocPath('周报记录', false, '/document/weekly/introduction/'),
    getDocPath('2022年度录', false, '/document/weekly/year2022/'),
  ],
  '/document/interview/': [
    getDocPath('前端面试', false, '/document/interview/introduction/'),
    // getDocPath('2022年度录', false, '/document/interview/year2022/'),
  ],
  '/document/reading-notes/': [
    getDocPath('前端技术书籍阅读笔记', false, '/document/reading-notes/introduction/'),
    getDocPath('你不知道的JavaScript(上卷)', false, '/document/reading-notes/js-01/'),
    getDocPath('JavaScript高级程序设计', false, '/document/reading-notes/js-02/'),
  ],
  '/document/exception-logging/': [
    getDocPath('错误异常记录', false, '/document/exception-logging/introduction/'),
    getDocPath('2022年度录', false, '/document/exception-logging/year2022/'),
  ],
  '/document/business-code/': [
    getDocPath('业务代码记录', false, '/document/business-code/introduction/'),
    getDocPath('2022年度录', false, '/document/business-code/year2022/'),
  ],
};
