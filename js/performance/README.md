### 提高页面性能的方法

#### 网络优化

1. 减少http请求

- 合并js、css
- css雪碧图
- 长缓存优化(利用浏览器的强缓存和协商缓存)
- 如果网站的图片过多，采用图片懒加载
- 采用iconfont来代替图片

2. 减少网络传输内容

- 开启服务器gzip压缩
- 压缩混淆js、css
- webp格式的图片压缩比更高
- 把静态资源部署到单独的域名上，这样每次请求不用带着cookie信息，对静态资源来说，带着cookie传给后端也没啥用

#### 渲染优化

1. 预解析DNS

       ```javascript
<link ref="dns-prefetch" href="http://www.xxx.com" />
// 默认情况下浏览器会开启a标签的dns预解析，但如果是https协议的，会自动关闭预解析，需要用下面的方式开启
<meta http-equiv="x-dns-prefetch-control" content="on" />
// 在chrome输入【chrome://net-internals/#dns】 来查看当前chrome缓存的dns
       ```

2. 异步加载js

- 动态创建script
- 设置script的defer
- 设置script的async

3. css放在head部分，js放在页面底部
4. 使用CDN让请求尽快的到达服务器