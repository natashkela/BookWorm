'use strict';
var Book = require('../models/bookModel');

module.exports = function (router) {
    router.get('/', function (req, res) {//home page
        Book.find({},function(err,books){
            if(err){
                console.log(err);
            }

            books.forEach(function(book){
                book.shortText = book.shortText(60);
            });

            var model={
                books: books
            }
            res.render('index', model);
        });
    });
};
