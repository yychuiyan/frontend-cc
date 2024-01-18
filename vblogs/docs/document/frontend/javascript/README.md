---
title: 基础概念
date: 2022-09-16
permalink: /document/frontend/javascript/
---

## 变量与常量

### 变量

变量是对值的具名引用，变量就是为值起名，然后引用这个名字，就等同于引用这个值。变量的名字就是变量名。

注意：JavaScript 的变量名区分大小写，A和a是两个不同的变量

```javascript
	let c = 5;
	let C = 10;
	console.log(c);// 5
	console.log(C); // 10
```

#### 变量的本质

变量的本质：变量是程序在内存中申请的一块用来存放数据的空间

#### 声明变量并赋值

```javascript
  // 声明变量
  let age;
  // 赋值 把值存入变量中
  age = 18; // 把10给age，赋值
  console.log(age);
  // 变量的初始化：声明一个变量并赋值
  let myName = 'Karim';
  console.log(myName);
```

- 如果变量重新声明了一个已经存在的变量是无效的(`var`)

```javascript
var a = 1;
var a;
console.log(a) // 1
```

- 如果二次声明的变量赋值，则会覆盖前面的值(`var`)

```javascript
var a = 1;
var a = 2;
console.log(a) // 2
```

#### JavaScript的引擎方式

JavaScript引擎的工作方式，先解析代码，获取所有被声明的变量，然后再一行一行的运行。

#### 变量提升

所有的变量声明语句都会被提升到代码的头部，这就叫做变量提升(`hoisting`)

```javascript
	let a;
	console.log(a); // 变量a已声明，但还未赋值 返回undefined
	a = 1;
```

### 常量

使用const声明的变量称为"常量"，他们不能被修改，如果修改会报错

```javascript
const myBirthday = '18.04.1982'
myBirthday = '19.02.1994' // 报错 不能对常量进行二次赋值
```

## 标识符

标识符（`identifier`）指的是用来识别各种值的合法名称。最常见的标识符就是变量名，以及后面要提到的函数名。

JavaScript 语言的标识符对大小写敏感，所以`a`和`A`是两个不同的标识符。

### 命名规则

标识符有一套命名规则，不符合规则的就是非法标识符。`JavaScript` 引擎遇到非法标识符，就会报错。

简单说，标识符命名规则如下。

- 第一个字符，可以是任意 `Unicode` 字母（包括英文字母和其他语言的字母），以及美元符号（`$`）和下划线（`_`）。
- 第二个字符及后面的字符，除了 Unicode 字母、美元符号和下划线，还可以用数字`0-9`。

下面这些都是合法的标识符。

```js
arg0 
_tmp 
$elem 
π 
```

下面这些则是不合法的标识符。

```javascript
1a  // 第一个字符不能是数字 
23  // 同上 
***  // 标识符不能包含星号 
a+b  // 标识符不能包含加号 
-d  // 标识符不能包含减号或连词线 
```

中文是合法的标识符，可以用作变量名。

```javascript
var 临时变量 = 1; 
```

### 保留字

JavaScript 有一些保留字，不能用作标识符

```javascript
arguments
break
case
catch
class
const
continue
debugger
default
delete
do
else
enum
eval
export
extends
false
finally
for
function
if
implements
import
in
instanceof
interface
let、new
null
package
private
protected
public
return
static
super
switch
this
throw
true
try
typeof
var
void
while
with
yield
```

## 用户交互函数

### alert 

`alert` 弹窗显示信息会将所有的数值参数转换成字符串方式

```javascript
alert("弹出信息")
```

### prompt

- `prompt`函数接收两个参数,第二个参数是可选的，浏览器会显示一个带有文本信息的模态窗口，还有`input`框和确定/取消按钮。
- 如果我们不提供的话，`Internet Explorer`会把`undefined`插入到`prompt`。
- 点击确定返回文本，点击取消或按下`Esc`键返回`null`。

```javascript
let arm = prompt('页面显示文本');
alert(arm);
```

### confirm

- `confirm`语法：`result= confirm(question)`
  `confirm` 函数显示一个带有 `question` 以及确定和取消两个按钮的模态窗口。
- 点击确定返回 `true`，点击取消返回 `false`。

```javascript
let isBoss = confirm("Are you the boss?")
alert(isBoss)
```

**注意：这些方法都是模态的，它们暂停脚本的执行，并且不允许用户与该页面的其余部分进行交互，直到窗口被解除。**