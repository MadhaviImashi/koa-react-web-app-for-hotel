// const mongodb = require('mongodb');
const {MongoClient} = require('mongodb');
const DbClient = new MongoClient('mongodb://localhost:27017', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

DbClient.connect(err => {
    if (err) {
        console.error(err);
        process.exit(-1);
    }
    console.log('Successfully connected to Mongo DB...');
});

module.exports = DbClient;