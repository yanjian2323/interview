### 异常的分类

1. 运行时错误
2. 资源类型错误(比如请求js 404错误等)

### 捕获的方式

1. 运行时错误的捕获方式

- try{} catch {}
- window.onerror = function(errorMessage, scriptURI, lineNumber, columnNumber, error){}

2. 资源类型错误的捕获方式

- 对象.onerror

  ```javascript
  //比如下面的代码请求了一个不存在的js文件，会被节点对象的onerror捕获到，不会冒泡到window.onerror
  <script type="text/javascript">
    let sc = document.createElement('script');
    sc.src = 'http://interview2.com/js/errorCatch/crossDomain11.js';
    document.head.appendChild(sc);

    sc.onerror = function(err){
      console.log(err);
    };
  </script>
  ```

- performance.getEntries()

  ```javascript
  //打印所有正确加载的资源
  performance.getEntries().forEach(item => console.log(item.name))
  ```

  ​

- onerror的捕获事件中

  ```javascript
  // 资源类型错误不会冒泡到window.onerror，所以不能在冒泡阶段捕捉到，但是window.onerror的捕获阶段可以捕获到，最后一个参数是true
  window.addEventListener('error', () => {
      
  }, true);//最后一个参数是true
  ```

### 跨域脚本报错

跨域请求的js如果报错，正常情况下用window.onerror是拿不到准确的报错信息的，会抛出一个System error的信息

![](https://ws4.sinaimg.cn/large/006tNbRwly1fv3hio7xmtj30hq05kgln.jpg)

如果这个时候要捕捉到准备的错误信息，要做2件事：

1. 给script标签加上crossorigin
2. 添加access-control-allow-origin

```javascript
// 里面的信息能准备打印
window.onerror = function(errorMessage, scriptURI, lineNumber, columnNumber, error){
  console.log(errorMessage);
  console.log(scriptURI);
  console.log(lineNumber);
  console.log(columnNumber);
  console.log(error);
}	
<script crossorigin src="//interview2.com/js/errorCatch/crossDomain.js"></script>
```

### 上报错误

1. ajax
2. new image.src="上报地址"