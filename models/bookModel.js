'use strict';
var mongoose = require('mongoose');
var bookModel = function(){
    var bookScheme = mongoose.Schema({
        title:String,
        category: String,
        description: String,
        author:String,
        publisher:String,
        price: Number,
        cover:String
    });
    //limit size of description
    bookScheme.methods.shortText=function(length){
        return this.description.substring(0,length);
    };
    
    return mongoose.model('Book',bookScheme);
};

module.exports = new bookModel();