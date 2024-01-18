---
title: 2022年09月技术日常
date: 2022-09-01
permalink: /document/exception-logging/year2022/
---

错误信息：Parsing error: 'import' and 'export' may appear only with 'sourceType: module'
<br>
解决方案：`.eslintrc.js`中设置：
```react
"parserOptions": { "sourceType": "module" }
```

