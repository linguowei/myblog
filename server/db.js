var mongoose = require('mongoose')
mongoose.Promise = require('bluebird')

mongoose.connect('mongodb://weiwei:weiwei@ds161008.mlab.com:61008/weiwei')

var userSchema = new mongoose.Schema({
	name: String,
	pwd: String,
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

var personalInformationSchema = new mongoose.Schema({
    name: String,
    individualitySignature: String,
    introduce: String,
})

var Models = {
	User: mongoose.model('User', userSchema),
	Article: mongoose.model('Article', articleSchema),
	TagList: mongoose.model('TagList', tagSchema),
    PersonalInformation: mongoose.model('PersonalInformation', personalInformationSchema),
}

module.exports = Models
