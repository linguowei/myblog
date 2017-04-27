# vue+node 实现的一套简易博客系统,包括博客前端展示页和博客后台管理页

17-04-27更新如下，调整博客前端展示页面样式，支持响应式，UI参照[美团点评技术团队](http://tech.meituan.com/)的，莫怪

> 简要技术栈：
>
> vue2.0+vue-router+vue-resource
>
> node+express+mongodb
>
> 后台管理页的编辑器用的simplemde，支持markdown语法
>
> markdown解析部分使用了marked这个库，语法高亮用highlight

### [博客在线地址](https://weiweiblog.herokuapp.com)（仅供临时预览）
 
![](https://github.com/linguowei/myblog/blob/master/PreviewImg/blog01.png)
---
![](https://github.com/linguowei/myblog/blob/master/PreviewImg/blog02.png)
---

### [博客后台管理页在线地址](https://weiweiblog.herokuapp.com/admin)（仅供临时预览）

![](https://github.com/linguowei/myblog/blob/master/PreviewImg/admin01.png)
---
![](https://github.com/linguowei/myblog/blob/master/PreviewImg/admin02.png)
---
![](https://github.com/linguowei/myblog/blob/master/PreviewImg/admin3.png)
---
![](https://github.com/linguowei/myblog/blob/master/PreviewImg/admin4.png)
---
### 本地查看方法

``` bash
# git clone https://github.com/linguowei/myblog.git
# cd myblog
# npm install
# node app.js
# localhost:9000
# localhost:9000/admin
```
### License
[MIT](https://www.oschina.net/question/54100_9455)
