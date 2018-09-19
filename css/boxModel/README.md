### css盒模型

#### 盒模型的分类：

- IE盒模型，width=content+padding+border
- 标准盒模型   width=width

#### 设置盒模型

- IE盒模型：box-sizing:border-box
- 标准盒模型：box-sizing:content-box

#### 获取盒模型的宽/高

- getComputedStyle(node)['width']，获取width，带有单位px，IE中用node.currentStyle['width']
- node.getBoundingClientRect().width，获取width+padding+border
- node.offsetWidth，获取width+padding+border

注意：在IE模型下getComputedStyle、getBoundingClientRect、offsetWidth得到的都是一样的