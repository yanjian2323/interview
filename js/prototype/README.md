### 原型

#### 基本概念

下面的图说明了原型的关联

![](https://ws3.sinaimg.cn/large/006tNbRwly1fv488uaz3bj31g40miq5o.jpg)

说明：

1. 函数都有一个prototype属性，指向了函数的原型对象
2. 函数原型对象的contrctor又指向了该函数
3. 通过new构造调用该函数返回一个实例对象，实例对象的隐式原型__proto__指向函数原型对象
4. 函数原型对象也有一个隐式原型__proto__指向Object.prototype，这样就形成了原型链

注意点：

1. 函数也有隐式原型__proto__，指向了Function.prototype，Function.prototype的隐式原型又指向了Object.prorotype

```javascript
function test(){}
// true
test.__proto__ === Function.prototype
// true
Function.prototype.__proto__ === Object.prototype
```

#### instanceOf

用法是【obj instanceOf 函数】，表达式左边是一个对象，右边必须是一个函数，否则会报错

instanceOf用来判断一个对象通过其原型链能不能找到右边函数的prototype

#### 实现继承的几种方法

