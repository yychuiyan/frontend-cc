var logsFunc = function(version) {
  if(typeof window !== 'undefined') {
    console.log(
        `%c %c\n人生像一本书,\n愚人哗啦哗啦地翻它,\n而贤者潜心细读。\n%c 夜雨炊烟的小栈 %c 当前版本：${version}`,
        `
        padding: 10px 10px;
        background-image: url(${window.location.origin}/blogs/img/hero-img2.png);
        background-size: contain;
        background-repeat: no-repeat;
        color: transparent;`,
        'color: #3eaf7c; font-size: 16px;margin-bottom: 10px;',
        'background: #35495e; padding: 4px; border-radius: 3px 0 0 3px; color: #fff',
        'background: #41b883; padding: 4px; border-radius: 0 3px 3px 0; color: #fff',
    );
  }
}

export default logsFunc;