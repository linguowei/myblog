var express = require('express')
var fs = require('fs')
var path = require('path')
var app = express()
var mime = require('mime')

var db = require('./db.js')
// console.log(db)

// new db.Article()

var resolve = file => path.resolve(__dirname, file)

app.use('/dist', express.static(resolve('../dist')))


// var articleList = {
// 	title: '这是标题6', 
// 	content: '内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容', 
// 	date: new Date()
// }


// 保存操作
// new db.Article(articleList).save(function(error){
// 	console.log(error ? 'error' : 'success')
// })

// 查询文章列表路由
app.get('/articleList', function(req, res){
	db.Article.find({}, function(err, docs){
		if (err) {
			console.log('出错'+ err)
			return
		}
		// console.log('结果'+ docs)
		res.json(docs)
	})
})
// 查询文章详情路由
app.get('/articleDetails/:id', function(req, res){
	db.Article.findOne({_id: req.params.id}, function(err, docs){
		if (err) {
			return
		}
		res.send(docs)
	})
})


app.get('*', function(req, res) {
    const html = fs.readFileSync(resolve('../' + 'index.html'), 'utf-8')
    res.send(html)
})

app.listen(8089, function() {
    console.log("应用实例，访问地址为 localhost:8089")
})
