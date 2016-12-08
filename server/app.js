var express = require('express')
var fs = require('fs')
var path = require('path')
var app = express()
var mime = require('mime')

var resolve = file => path.resolve(__dirname, file)

app.use('/dist', express.static(resolve('../dist')))


var articleList = [
	{title: '这是标题1', passages: '内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容', year: '2016', month: '12', day: '8'
	},
	{title: '这是标题2', passages: '内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容', year: '2016', month: '12', day: '8'
	},
	{title: '这是标题3', passages: '内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容', year: '2016', month: '12', day: '8'
	},
	{title: '这是标题4', passages: '内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容', year: '2016', month: '12', day: '8'
	},
]

app.get('/articleList', function(req, res){
	res.json(articleList)
})

app.get('*', function(req, res) {
    const html = fs.readFileSync(resolve('../' + 'index.html'), 'utf-8')
    res.send(html)
})

app.listen(8089, function() {
    console.log("应用实例，访问地址为 localhost:8089")
})
