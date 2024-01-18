module.exports = [
    ['link', {
        rel: 'shortcut icon',
        type: 'image/x-icon',
        href: '/favicon.ico'
    }],
    ['meta', {
        name: 'viewport',
        content: 'width=device-width,initial-scale=1,user-scalable=no'
    }],
    ['meta', {
        name: 'keywords',
        content: '夜雨炊烟,夜雨炊烟的博客,夜雨炊烟的小栈,vue,vuepress'
    }],
    ['meta', {name: 'referrer', content: 'no-referrer-when-downgrade'}],
    ['meta', {name: 'baidu-site-verification', content: 'code-gP8EOMDzMQ'}],
    [
        'script', {},`
            var _hmt = _hmt || [];
            (function() {
            var hm = document.createElement("script");
            hm.src = "https://hm.baidu.com/hm.js?fb1539bb4d942405662eada17ceaa976";
            var s = document.getElementsByTagName("script")[0];
            s.parentNode.insertBefore(hm, s);
        })();
        </script>
        `
    ]
]