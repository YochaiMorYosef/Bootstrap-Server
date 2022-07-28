const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/bootstrapserverDB');
/*
// Requires !!!
var mongodb = require("mongodb");

var client = mongodb.MongoClient;
var url = "mongodb://localhost:27017/bootstrapserverDB";
client.connect(url, function(err, client) {

    var db = client.db("bootstrapserverDB");
    var collection = db.collection("requests");

    var query = {};

    var cursor = collection.find(query);

    cursor.forEach(
        function(doc) {
            console.log(doc);
        },
        function(err) {
            client.close();
        }
    );

    db.collection("requests").createIndex({ "Client_pass": 1 }, { expireAfterSeconds: 10 },
        (err, dbResult) => {
            if (err) throw err;
            console.log("Index Created");
        });


});*/