# vue+node 实现的一套简易博客系统,包括博客前端展示页和博客后台管理页

2017-09-05更新，该博客已用`Angular4重构`，界面ui也重新设计了，目前线上跑的版本已经是`Angular4`重构后的了，`vue`版的已不再维护，新版[在线地址](https://lweiwei.com), 源码[地址](https://github.com/linguowei/blog-angular)
<br>

分割线———————————————————————————————————————————————————————————————————————————
<br>

2017-04-27更新如下，调整博客前端展示页面样式，支持响应式，添加了评论功能，UI参照[美团点评技术团队](http://tech.meituan.com/)的，莫怪

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
