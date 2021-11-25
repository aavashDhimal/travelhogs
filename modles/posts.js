const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new Schema({
    blogTitle:{
        type : String,
        required : true
    },
    desc:{
        type : String,
        required : true
    },
    img1:{
        type : String,
        required : true
    },
    img2:{
        type : String
 
    },
    date:{
        type : Date,
        default : Date.now
    }

});

module.exports = Post = mongoose.model('users',PostSchema);