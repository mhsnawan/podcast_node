var express = require('express');
var mainRouter = express.Router();
var mongodb = require('mongodb').MongoClient;
var url = require('../config/mongodb');
var ObjectID = require('mongodb').ObjectID;
var str = require('string');
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
            collection.find({podcast_name: name}).toArray(
                function(err, results){
                if (err) throw err;
                    var collection = db.collection('podcast');
                    collection.findOne({collectionname: name},
                    function(err, results1){
                    if (err) throw err;
                    res.render('singlealbum.ejs', {data:results, data1:results1});
                    console.log(results1);
                    db.close();
                    });
                db.close();
                });
            });
    });


mainRouter.route('/add')
    .get(function (req, res) {
        mongodb.connect(url,function(err,db){
        var collection = db.collection('podcast');
        collection.find({}).toArray(
            function(err, results){
                console.log(results);
                if (err) throw err;
                res.render('add.ejs', {data:results});
                db.close();
            });
        });
        
        //res.render('add.ejs');
    });


mainRouter.route('/postalbum')
    .post(function(req, res){
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
    .post(function(req, res){
        mongodb.connect(url,function(err,db){
           var data ={
               'podcast_name': req.body.podcast_name,
               'episode_name': req.body.episode_name,
               'title': req.body.title,
               'pubdate': req.body.pubdate,
               'duration': req.body.duration,
               'description': req.body.description,
               'summary': req.body.summary,
               'audiourl': req.body.audiourl,
               'imageurl': req.body.imageurl
           };
            var collection = db.collection('episode');
            collection.insert(data, function (err, results1) {
                res.send('Succesffult added');
            });
            
        });
    });

mainRouter.route('/searchByPodcast')
    .post(function(req,res){
        query = req.body.query;
        mongodb.connect(url,function(err,db){
             var collection = db.collection('podcast');
             var podcast = {};
             collection.find({},function(err,results){
                episodes = {};
                if(err)
                    throw err;
                if(results == null){
                    podcast ={
                        'artistname': '',
                        'collectionname': '',
                        'feedurl': '',
                        'artworkurlsmall': '',
                        'language': '',
                        'podcast_cover': ''
                    };
                }   
                else{
                    podcast = results;
                }
                pod = podcast.filter(word => str(word).contains(query));
                res.render('index.ejs', {data:pod});
            });
         });
    });
mainRouter.route('/searchByEpisode')
    .post(function (req, res) {
        query = req.body.query;
        mongodb.connect(url, function (err, db) {
            var collection = db.collection('episode');
            var episode = {};
            collection.find({}, function (err, results) {
                episodes = {};
                if (err)
                    throw err;
                if (results == null) {
                    episode = {
                        'podcast_name': '',
                        'episode_name': '',
                        'title': '',
                        'pubdate': '',
                        'duration': '',
                        'description': '',
                        'summary': '',
                        'audiourl': '',
                        'imageurl': ''
                    };
                }
                else {
                    episode = results;
                }
                pod = episode.filter(word => str(word).contains(query));
                console.log(pod);
                res.render('index.ejs', { data: pod });
            });
        });
    });

module.exports = mainRouter;