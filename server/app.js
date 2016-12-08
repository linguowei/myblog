var express = require('express')
var fs = require('fs')
var path = require('path')
var app = express()
var mime = require('mime')

var resolve = file => path.resolve(__dirname, file)

app.use('/dist', express.static(resolve('../dist')))

app.get('/img', function(req, res){
	res.send({msg: '这是一条从后台获取的消息'})
})

app.get('*', function(req, res) {
    const html = fs.readFileSync(resolve('../' + 'index.html'), 'utf-8')
    res.send(html)
})

app.listen(8089, function() {
    console.log("应用实例，访问地址为 localhost:8089")
})
