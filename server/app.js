var express = require('express');
var fs = require('fs');
var path = require('path');
var bodyParser = require('body-parser');
var mime = require('mime');
var db = require('./db.js');
var app = express();

var resolve = file => path.resolve(__dirname, file);
app.use('/dist', express.static(resolve('../dist')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// 查询文章列表路由 用于博客前端展示数据不包含草稿内容
app.get('/api/articleList', function(req, res){
	db.Article.find({state: "publish"}, function(err, docs){
		if (err) {
			console.log('出错'+ err);
			return
		}
		res.json(docs)
	})
});
// 查询文章列表路由 用于博客后端管理系统包含草稿和已发布文章数据
app.get('/api/admin/articleList', function(req, res){
	db.Article.find({}, function(err, docs){
		if (err) {
			console.log('出错'+ err);
			return
		}
		res.json(docs)
	})
});
// 查询文章详情路由
app.get('/api/articleDetails/:id', function(req, res){
	db.Article.findOne({_id: req.params.id}, function(err, docs){
		if (err) {
			return
		}
		res.send(docs)
	})
});
// 文章保存路由
app.post('/api/saveArticle', function(req, res){
	new db.Article(req.body.articleInformation).save(function(error){
		if (error) {
			res.send('保存失败');
			return
		}
		res.send()
	})
});
// 文章标签查询路由
app.get('/api/getArticleLabel', function(req, res){
    db.Article.find({},function(err, articleList){
        if (err) {
            return
        }
        articleList.forEach(function(articleItem){
            db.TagList.find({},function(err, labelList){
                if (err) {
                    return
                }
                labelList.forEach(function (item) {
                    if (articleItem.label == item.tagName) {
                        item.tagNumber++
                        res.json(labelList)
                    }
                })
            })

        })
    })
});
// 文章标签保存路由
app.post('/api/saveArticleLabel', function(req, res){
    new db.TagList(req.body.tagList).save(function(error){
        if (error) {
            res.send('保存失败');
            return
        }
        res.send()
    })
});

// 后台管理页路
app.get('/admin', function(req, res) {
	var html = fs.readFileSync(resolve('../' + 'admin.html'), 'utf-8');
	res.send(html)
});

// 博客首页
app.get('*', function(req, res) {
    var html = fs.readFileSync(resolve('../' + 'index.html'), 'utf-8');
    res.send(html)
});

app.listen(9000, function() {
    console.log("应用实例，访问地址为 localhost:9000")
});
