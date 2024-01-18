---
title: js字符串的转换及拼接
date: 2022-09-24
categories:
- JavaScript
tags:
  - 字符串转换
  - string
---

## 字符串的转换

### toString()

数值、布尔值、对象和字符串值都有toString()方法，但是null和undefined值没有这个方法

```javascript
let num = 1;
let str = num.toString();
console.log(typeof (str)); //  string类型
```

### 利用函数String(变量)实现

在不知道变量是否为 `null` 或者 `undefined` 是可以使用 `String()` 函数来转换为字符串类型

```
String()`函数可以将任何类型的数值转换为字符串，意味着如果值为 `null` 那么转换之后的结果为 `null`，如果值为 `undefined` 那么转换之后的结果为 `undefined
let num = 1
let str=String(num)
console.log(typeof (str)); //  string类型
```

### 利用 + 拼接字符串的方法

利用 `+`实现转换 (也称之为隐式转换)

```javascript
let num = 1
let str = num + 'num1' + 'num2'
console.log(typeof (str)); // string类型
```

## 字符串的拼接

### 使用 `+` 运算符

```javascript
let s1 = "karim's"
let s2 = 'js'
console.log(s1 + s2) // javascript
```

### 使用 `concat` 方法

将所有参数都转换为字符串，按顺序连接当前字符串尾部返回连接后的字符串

```javascript
let s1 = "java"
let s2 = 'script'
console.log(s1.concat(s2)) // javascript
```

### 利用模板字符串进行拼接

ES6中新增的字符串方法，可以配合反单引号完成拼接字符串的功能，将字符串使用`${}`包裹进行拼接操作

```javascript
let s1 = "java"
let s2 = `${s1}script`
console.log(s2) // javascript
```

### 利用 `join()` 方法连接字符串

```
join()` 方法将数组作为字符串返回，元素由指定分隔符进行分隔，默认分隔符是 `(,)
```

注意：`join() `方法不会改变原始数组

```javascript
let arr=["hello","java","script"]
let str=arr.join('')
console.log(str) // hellojavascript
```
