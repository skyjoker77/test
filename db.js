var mongoose =require('mongoose');
mongoose.connect('mongodb://localhost:27017/article',{
    useNewUrlParser:true
});
var articleSchema = new mongoose.Schema({
    articleContent:String,
})


module.exports=mongoose.model('article',articleSchema);