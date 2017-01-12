var express = require('express');
var fs = require('fs');
var path = require('path');
var bodyParser = require('body-parser');
var mime = require('mime');
var router = require('./router');
var app = express();


var resolve = file => path.resolve(__dirname, file);
app.use('/dist', express.static(resolve('../dist')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(router)


// 后台管理页
app.get('/admin', function(req, res) {
	var html = fs.readFileSync(resolve('../' + 'admin.html'), 'utf-8');
	res.send(html)
});

// 博客首页
app.get('*', function(req, res) {
    var html = fs.readFileSync(resolve('../' + 'index.html'), 'utf-8');
    res.send(html)
});

app.listen(process.env.PORT || 9000, function() {
    console.log("应用实例，访问地址为 localhost:9000")
});
