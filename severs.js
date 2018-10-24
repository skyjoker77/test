var express = require('express');  //express
var bodyParser = require('body-parser'); // 中间件
var Article = require('./db.js'); //连接数据库

var severs = express(); // express

var urlencodedParser = bodyParser.urlencoded({ extended: false })

severs.use(bodyParser.json()); // 中间件
severs.use(express.static('public'));


severs.post('/article', urlencodedParser, function (req, res) {
    // console.log(req.body);

    var articleContent = req.body.content;
    Article.create({
        articleContent: articleContent
    }, function (err, doc) {
        if (err) {
            res.end('no')
        } else {
            res.end('ok')
        }
    });
});



severs.get('/blog', function (req, res) {
    
    Article.find(function (err, docs) {
        console.log(docs);
        res.json(docs)
    })

})
severs.listen(2018, function () {
    console.log('安排上了！')
})