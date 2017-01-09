var mongoose = require('mongoose')
mongoose.Promise = require('bluebird')

mongoose.connect('mongodb://localhost/weiweiblog')

var userSchema = new mongoose.Schema({
	name: String,
	pwd: String
})

var articleSchema = new mongoose.Schema({
	title: String,
	date: Date,
	articleContent: String,
	state: String,
	label: String,
})

var tagSchema = new mongoose.schema({
    tagLisg: Array,
})

var Models = {
	User: mongoose.model('User', userSchema),
	Article: mongoose.model('Article', articleSchema),
	tagList: mongoose.model('tagList', tagSchema),
}

module.exports = Models
