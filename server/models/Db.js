class Db {
    getDb() {
        return new Promise(function(resolve, reject) {
            var MongoClient = require('mongodb').MongoClient;
            var url = "mongodb://localhost:27017/";
            MongoClient.connect(url, {useNewUrlParser: true}, function(err, db) {
                if (err) {
                    reject("ERROR");
                }
                var dbc = db.db("db01");
                resolve(dbc);
            });
        });
    }
}

module.exports = Db;