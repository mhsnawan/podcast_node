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

mainRouter.route('/postalbum')
    .get(function(req, res){
        mongodb.connect(url,function(err,db){
           var data ={
               'artistname': 'Tamar Avishaie',
               'collectionname': 'The Lonely Palette',
               'feedurl': 'http://www.thelonelypalette.com',
               'artworkurlsmall': '',
               'language': 'EN',
               'podcast_cover': 'https://assets3.thrillist.com/v1/image/1862685/size/tmg-article_tall;jpeg_quality=20.jpg'
           };
            var collection = db.collection('podcast');
            collection.insert(data, function (err, results) {
                console.log(results)
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
               'podcast_id': '5b09212c2e940404109c745a',
               'podcast_name': name,
               'title': 'Nude Self-Portrait',
               'pubdate': '26 May, 2017',
               'duration': '29:30',
               'description': 'Each episode, host Tamar Avishai picks a painting du jour, interviews unsuspecting museum visitors in front of it, and then dives deeply into the objec',
               'summary': 'Ep. 29 - Egon Schiele "Nude Self-Portrait" (1910)',
               'audiourl': 'https://soundcloud.com/the-lonely-palette/ep-29-egon-schieles-nude-self-portrait-1910',
               'imageurl': 'https://static1.squarespace.com/static/56e978a6859fd0cc7eba29d0/56e988b61d07c093a0bc558e/5ade8c78aa4a996c380d1244/1524788729325/IMG-7194.JPG?format=2500ws',
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