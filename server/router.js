var express = require('express');
var router = express.Router();
var db = require('./db');

// 查询文章列表路由 用于博客前端展示数据不包含草稿内容
router.get('/api/articleList', function(req, res){
    db.Article.find({state: "publish"}, function(err, docs){
        if (err) {
            console.log('出错'+ err);
            return
        }
        res.json(docs)
    })
});
// 查询文章列表路由 用于博客后端管理系统包含草稿和已发布文章数据
router.get('/api/admin/articleList', function(req, res){
    db.Article.find({}, function(err, docs){
        if (err) {
            console.log('出错'+ err);
            return
        }
        res.json(docs)
    })
});
// 查询文章列表路由(含查询条件) 用于博客后端管理系统包含草稿和已发布文章数据
router.post('/api/admin/articleList', function(req, res){
    db.Article.find({label: req.body.label.label}, function(err, docs){
        if (err) {
            console.log('出错'+ err);
            return
        }
        res.json(docs)
    })
});
// 查询文章详情路由
router.get('/api/articleDetails/:id', function(req, res){
    db.Article.findOne({_id: req.params.id}, function(err, docs){
        if (err) {
            return
        }
        res.send(docs)
    })
});
router.post('/api/articleDetails', function(req, res){
    db.Article.findOne({_id: req.body.id}, function(err, docs){
        if (err) {
            return
        }
        res.send(docs)
    })
});
// 文章保存路由
router.post('/api/saveArticle', function(req, res){
    new db.Article(req.body.articleInformation).save(function(error){
        if (error) {
            res.send('保存失败');
            return
        }
        // 更新文章对应的标签数据
        db.Article.find({label:req.body.articleInformation.label},function(err, ArticleList){
            if (err) {
                return
            }
            db.TagList.find({tagName:req.body.articleInformation.label}, function(err, docs){
                if(docs.length>0){
                    docs[0].tagNumber = ArticleList.length
                    db.TagList(docs[0]).save(function(error){})
                }
            })
        })
        res.send()
    })
});
// 文章更新路由
router.post('/api/updateArticle', function(req, res){
    db.Article.find({_id: req.body.obj._id}, function(err, docs){
        if(err){
            return
        }
        docs[0].title = req.body.obj.title
        docs[0].articleContent = req.body.obj.articleContent
        docs[0].date = req.body.obj.date
        docs[0].state = req.body.obj.state
        docs[0].label = req.body.obj.label
        db.Article(docs[0]).save(function(err){
            if (err){
                res.status(500).send();
                return
            }
            res.send()
        })
    })
});
// 文章标签查询路由
router.get('/api/getArticleLabel', function(req, res){
    db.TagList.find({},function(err, docs){
        if (err) {
            return
        }
        res.json(docs)
    })
});
// 文章标签保存路由
router.post('/api/saveArticleLabel', function(req, res){
    new db.TagList(req.body.tagList).save(function(error){
        if (error) {
            res.send('保存失败');
            return
        }
        res.send()
    })
});
// 博客信息路由
router.post('/api/save/personalInformation', function(req, res){
    db.PersonalInformation.find({}, function(err, docs){
        if (err) {
            res.status(500).send();
            return
        }
        if(docs.length>0){
            docs[0].name = req.body.form.name
            docs[0].individualitySignature = req.body.form.individualitySignature
            docs[0].introduce = req.body.form.introduce
            db.PersonalInformation(docs[0]).save(function(err){
                if (err) {
                    res.status(500).send();
                    return
                }
                res.send();
            })
        } else {
            new db.PersonalInformation(req.body.from).save(function(err){
                if (err){
                    res.status(500).send();
                    return
                }
                res.send();
            })
        }
    })
})
router.get('/api/personalInformation', function(req, res){
    db.PersonalInformation.find({}, function(err, docs){
        if (err) {
            res.status(500).send();
            return
        }
        res.json(docs)
    })
})

// 删除文章
router.post('/api/delect/article', function(req, res){
    db.Article.remove({_id: req.body._id}, function(err, docs){
        if (err) {
            res.status(500).send();
            return
        }
        res.send()
    })
})

module.exports = router