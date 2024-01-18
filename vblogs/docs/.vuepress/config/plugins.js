module.exports = [
    [
        'sitemap', {
        hostname: 'https://yychuiyan.com'
    },
    ],
    // 更新刷新插件
    [
        '@vuepress/pwa',
        {
            serviceWorker: true,
            updatePopup: {
                message: '发现新内容可用',
                buttonText: '刷新',
            },
        },
    ],
    // 复制插件
    [
        'vuepress-plugin-nuggets-style-copy',
        {
            copyText: '复制代码',
            tip: {
                content: '复制成功!',
            },
        },
    ],
    // 分页
    [
        '@vuepress-reco/vuepress-plugin-pagation',
        {
            perPage: 10,
        },
    ],
    // 消息弹窗
    [
        '@vuepress-reco/vuepress-plugin-bulletin-popover',
        {
            width: '300px', // 默认 260px
            title: '消息提示',
            body: [
                {
                    type: 'title',
                    content: '关注公众号',
                    style: 'text-aligin: center;',
                },
                {
                    type: 'image',
                    src: 'https://vuepres-images.oss-cn-shanghai.aliyuncs.com/vue-blog/weixin.JPG',
                },
            ],
            // footer: [
            //     {
            //         type: 'button',
            //         text: '打赏',
            //         link: '/donate'
            //     }
            // ]
        },
    ],
    [
        '@vuepress/last-updated',
        {
            transformer: (timestamp, lang) => {
                return new Date(timestamp).toUTCString();
                //或者用下面这段
                // const moment = require('moment')
                // moment.locale(lang)
                // return moment(timestamp).toLocaleString()
            },
        },
    ],
    // 评论插件
    // [
    //   'vuepress-plugin-mygitalk',
    //   {
    //     // 是否启用(关闭请设置为false)(default: true)
    //     enable: true,
    //     // 是否开启首页评论(default: true)
    //     home: false,
    //     // Gitalk配置
    //     gitalk: {
    //       // GitHub Application Client ID.
    //       clientID: '3606adc2786c9fa2696a',
    //       // GitHub Application Client Secret.
    //       clientSecret: '66aa4a9ef16f3874b59fc5d22eae622c4c9625a5',
    //       // GitHub repository. 存储评论的 repo
    //       repo: 'vblogs',
    //       // GitHub repository 所有者，可以是个人或者组织。
    //       owner: 'zhanghaoju',
    //       // 设置语言(default: zh-CN)
    //       language: 'zh-CN',
    //       autoCreateIssue: true,//自动创建评论
    //     },
    //   },
    // ],
    // [
    //     '@vssue/vuepress-plugin-vssue', {
    //     // 设置 `platform` 而不是 `api`
    //       platform: 'github',
    //       locale: 'zh-CN',
    //       owner: "zhanghaoju",//对应 仓库 的拥有者帐号或者团队
    //       repo: "yychuiyan", // 用来存储评论的 仓库
    //       clientId: "3606adc2786c9fa2696a",  // OAuth App 的 client id
    //       clientSecret: "66aa4a9ef16f3874b59fc5d22eae622c4c9625a5",  // OAuth App 的 client secret
    //      // autoCreateIssue: true,//自动创建评论
    //   }
    // ],
    //   [
    //     'vuepress-plugin-comment',
    //     {
    //       choosen: 'valine',
    //       // options选项中的所有参数，会传给Valine的配置
    //       options: {
    //         el: '#valine-vuepress-comment',
    //         appId: 'Ipq34wBx94kHywEDh8Z0b8KR-gzGzoHsz',
    //         appKey: 'WADQBfeIgguNaFU81jwgZIDB',
    //
    //         // 评论框占位内容
    //         placeholder: "评论支持Markdown语法",
    //         // 评论者头像
    //         avatar: "mp",
    //         // 是否启用昵称框自动获取QQ昵称和QQ头像
    //         // enableQQ: true,
    //         // 访问量统计
    //         visitor: true,
    //       }
    //     }
    //   ]
];
