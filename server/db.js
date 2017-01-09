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

var tagSchema = new mongoose.Schema({
    tagName: String,
    tagNumber: Number,
})

var Models = {
	User: mongoose.model('User', userSchema),
	Article: mongoose.model('Article', articleSchema),
	TagList: mongoose.model('TagList', tagSchema),
}

module.exports = Models
