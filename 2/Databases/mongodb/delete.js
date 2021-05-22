const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';
const dbName = 'beer';

MongoClient.connect(url, { useUnifiedTopology: true}, (error, client) => {
    if (error) {
        throw new Error(error);
    }

    const db = client.db(dbName);
    const breweries = db.collection('breweries');

    breweries.deleteOne({ name: 'Nørrebro Bryghus' }, (error, result) => {
        if (error) {
            throw error;
        }
        console.log(result.result);
        client.close();
    });
});