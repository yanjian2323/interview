### BFC

#### 什么是BFC？

BFC(block format context)块状格式化上下文

#### BFC的触发条件

- float的值不为none
- display的值是inline-block或者table相关的(比如table、table-cell等)
- position的值是absolute或者fixed(注意：relative不行)
- overflow的值不是visible

#### BFC的使用场景

解决垂直方向的重叠问题

设置了BFC的父容器，如果子元素浮动，父容器也参与高度计算

BFC的容器和浮动元素的区域不会重叠

