---
title: js实现倒计时
date: 2022-09-26
---

效果图

![img](https://vuepres-images.oss-cn-shanghai.aliyuncs.com/%E7%99%BE%E7%82%BC/%E4%B8%9A%E5%8A%A1%E4%BB%A3%E7%A0%81%E7%89%87%E6%AE%B5.png)

```html

<div>
    <div>
        请输入到期时间：<input id="ipt" type="text" value="2022-07-29 17:56:00">
        <button>开始计时</button>
    </div>
    <div>
        剩余时间：
        <span class="day">00天</span>
        <span class="hour">00小时</span>
        <span class="minute">00分钟</span>
        <span class="second">00秒</span>
    </div>
</div>
// 获取元素
let day = document.querySelector('.day')
let hour = document.querySelector('.hour');
let minute = document.querySelector('.minute');
let second = document.querySelector('.second');
let btn = document.querySelector('button')
let ipt = document.querySelector('input')

btn.addEventListener('click', () => {
console.log("输入框中的值为：", ipt.value)
let iptVal = ipt.value
// 设置到期时间
let timing = new Date(iptVal)

setInterval(() => {
countDown(timing)
}, 1000)
})


function countDown(time) {
// 当前时间
let nowTime = new Date()
if (time < nowTime) {
clearInterval(timer)
return false
}
// 得到剩余时间 秒
let timeRemaining = (time - nowTime) / 1000
// 得到天数
let d = Math.floor(timeRemaining / 60 / 60 / 24)
d = d < 10 ? "0" + d : d
day.innerHTML = d + "天"
// 计算小时
let h = Math.floor(timeRemaining / 60 / 60 % 24)
h = h < 10 ? "0" + h : h
// 追加到页面中
hour.innerHTML = h + "小时"
// 计算分钟
let min = Math.floor(timeRemaining / 60 % 60)
minute.innerHTML = min + "分"
// 计算秒
let sec = Math.floor(timeRemaining % 60)
second.innerHTML = sec + "秒"
}
```

