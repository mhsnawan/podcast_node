var express = require('express');
var mainRouter = express.Router();
var mongodb = require('mongodb').MongoClient;
var url = require('../config/mongodb');
var ObjectID = require('mongodb').ObjectID;

mainRouter.route('/')
    .get(function(req, res){
        mongodb.connect(url,function(err,db){
        var collection = db.collection('podcast');
        collection.find({}).toArray(
            function(err, results){
                console.log('hello')
                console.log(results);
                if (err) throw err;
                res.render('index.ejs', {data:results});
                db.close();
            });
        });
    });

mainRouter.route('/album/:id')
    .get(function(req, res){
        name = req.params.id;
        console.log(name);
        mongodb.connect(url,function(err,db){
            var collection = db.collection('episode');
            collection.findOne({podcast_name: name}, function(err, results){
                if (err) throw err;
                res.render('singlealbum.ejs', {data:results});
                console.log(results);
                db.close();
                });
            });
    });
mainRouter.route('/add')
    .get(function (req, res) {
        res.render('add.ejs');
    });
mainRouter.route('/postalbum')
    .get(function(req, res){
        mongodb.connect(url,function(err,db){
           var data ={
               'artistname': req.body.artistname,
               'collectionname': req.body.collectionname,
               'feedurl': req.body.feedurl,
               'artworkurlsmall': req.body.artworkurlsmall,
               'language': req.body.language,
               'podcast_cover': req.body.podcast_cover
           };
            var collection = db.collection('podcast');
            collection.insert(data, function (err, results) {
                console.log(results);
                db.close();
                res.send('sucessfully added');
            });
        });
    });

mainRouter.route('/postepisodes')
    .get(function(req, res){
        mongodb.connect(url,function(err,db){
            name = 'The Lonely Palette';
           var data ={
               'podcast_name': req.body.podcast_name,
               'title': req.body.title,
               'pubdate': req.body.pubdate,
               'duration': req.body.duration,
               'description': req.body.description,
               'summary': req.body.summary,
               'audiourl': req.body.audiourl,
               'imageurl': req.body.imageurl
           };
            var collection = db.collection('episode');
            collection.find({'name': name }, function (err, results) {
                collection.insert(data, function (err, results1) {
                    res.send('Succesffult added');
                });
            });
        });
    });

module.exports = mainRouter;