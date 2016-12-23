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

// 保存操作
// new db.Article(articleList).save(function(error){
// 	console.log(error ? 'error' : 'success')
// })

// 查询文章列表路由
app.get('/api/articleList', function(req, res){
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

// 后台管理页路由
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
