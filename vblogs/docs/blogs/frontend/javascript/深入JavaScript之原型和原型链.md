---
title: 深入JavaScript之原型和原型链
date: 2022-08-29
sticky:
- description: 文章置顶。
- type: number
- sort type: 1
categories:
  - JavaScript
tags:
  - 原型
  - 原型链

---

JavaScript不包含传统的类继承模型，而是使用`prototype`原型模型

## 原型

引用冴羽大佬的话说就是：每一个JavaScript对象在创建的时候就会与之关联另一个对象，这个对象就是我们所说的原型，每一个对象都会从原型"
继承"属性。

构造函数通过原型分配的函数是所有对象共享的，JavaScript规定，每一个构造函数都有一个`prototype`属性，指向另一个对象。

这个`prototype`属性就是一个对象，这个对象的所有属性和方法，都会被构造函数所拥有。

我们可以把那些不变的方法，直接定义在`prototype`对象上，这样所有对象的实例就可以共享这些方法了

```javascript
    // 利用构造函数创建对象
function Fun(x, y) {
    this.x = x;
    this.y = y;
}

// 使用原型创建一个共享方法
Fun.prototype.sum = function () {
    return this.x + this.y
}
Fun.prototype.subtract = function () {
    return this.x - this.y
}
let k = new Fun(1, 2);
let h = new Fun(5, 3)
console.log(k.sum()) // 3
console.log(h.subtract()) // 2
```

一般情况下，我们的公共属性定义的构造函数里面，公共的方法我们放到原型对象上

### 对象原型

每一个JavaScript对象都具有`__proto__`属性，这个属性指向对象的原型

```javascript
    // 利用构造函数创建对象
function Fun(x, y) {
    this.x = x;
    this.y = y;
}

// 使用原型创建一个共享方法
Fun.prototype.sum = function () {
    return this.x + this.y
}
Fun.prototype.subtract = function () {
    return this.x - this.y
}
let k = new Fun(1, 2);
let h = new Fun(5, 3)
console.log(k) // 返回对象
console.log(k.__proto__ === Fun.prototype) // true
console.log(k.sum()) // 3
console.log(h.subtract()) // 2
```

每个原型都有一个`constructor`属性指向关联的构造函数

```javascript
    // 利用构造函数创建对象
function Fun(x, y) {
    this.x = x;
    this.y = y;
}

// 使用原型创建一个共享方法
Fun.prototype.sum = function () {
    return this.x + this.y
}
Fun.prototype.subtract = function () {
    return this.x - this.y
}
let k = new Fun(1, 2);
let h = new Fun(5, 3)
console.log(k) // 返回对象
console.log(k.__proto__ === Fun.prototype) // true
console.log(Fun === Fun.prototype.constructor) // true
console.log(k.sum()) // 3
console.log(h.subtract()) // 2
```

方法的查找规则：

- 首先看`k`对象身上是否有`sum`方法，如果有就执行这个对象上的 `sum`

![img](https://vuepres-images.oss-cn-shanghai.aliyuncs.com/vue-blog/prototype.png)

- 如果没有`sum`这个方法，因为有`**__proto__**`的存在，就去构造函数原型对象`prototype`身上去查找这个方法

### 构造函数、实例对象、原型对象三者之间的关联

- 构造函数通过`prototype`指向原型对象，原型对象通过`constructor`又指回构造函数
- 构造函数又可以指向对象实例，对象实例中也有一个`__proto__`指向了原型对象，原型对象又通过`contructor`指回构造函数

### 属性查找

当查找一个对象的属性时，JavaScript
会向上遍历原型链，直到找到给定名称的属性为止，到查找到达原型链的顶部，也就是` Object.prototype`
但是仍然没有找到指定的属性，就会返回 `undefined`

```javascript
    function Foo() {
    this.add = function (x, y) {
        return x + y
    }
}

Foo.prototype.add = function (x, y) {
    return x + y + 10;
}
Object.prototype.subtract = function (x, y) {
    return x - y
}
let f = new Foo()
console.log(f.add(1, 2)) // 3
console.log(f.subtract(3, 4)) // -1
```

通过上面运行结果可以看出，`subtract`
是按照向上查找来得到的结果，属性在查找的时候先查找自身的属性，如果没有再去查找原型，再没有，再往上走，一直查到`Object`
的原型上，所以`add`是自身属性结果相加

注意：我们可以赋值任何类型的对象到原型上，但是不能赋值原子类型的值

```javascript
function Foo() {
}

Foo.prototype = 1; // 无效
```

## 原型链

根据原型一层一层查找就形成了一个原型链

每个JavaScript对象都具有一个属性`__proto__`，这个属性指向该对象的原型，而原型通过`constructor`
指向关联的构造函数，原型也作为一个对象实例，在读取实例属性的时候，如果找不到，就会查找与对象关联的原型中的属性，如果还查不到就去找原型的原型，直到找到最顶层为止，使用原型对象的好处是，在它上面定义的属性和方法都可以被对象实例共享。原来在构造函数中直接赋给对象实例的值，可以直接赋值给它们的原型。

![img](https://vuepres-images.oss-cn-shanghai.aliyuncs.com/vue-blog/prototype02.png)

### hasOwnProperty

`hasOwnProperty`是`Object.prototype`的一个方法，它可以判断一个对象是否包含自定义属性而不是原型链上的属性，`hasOwnProperty`
是JavaScript中唯一一个处理属性但是不查找原型链的函数

```javascript
    Object.prototype.bar = 1;
var foo = {goo: undefined}
console.log(foo.bar) // 1
console.log('bar' in foo) // true
console.log(foo.hasOwnProperty('bar')) // false
console.log(foo.hasOwnProperty('goo')) // true
```

注意：JavaScript 不会保护 `hasOwnProperty` 被非法占用，因此如果一个对象碰巧存在这个属性，就需要使用外部的 `hasOwnProperty`
函数来获取正确的结果

参考链接：

[汤姆大叔-强大的原型和原型链](https://www.cnblogs.com/TomXu/archive/2012/01/05/2305453.html)

[冴羽-深入之从原型到原型链](https://github.com/mqyqingfeng/Blog/issues/2)
