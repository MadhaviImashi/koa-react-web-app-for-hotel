// // const mongodb = require('mongodb');
// const {MongoClient} = require('mongodb');
// const DbClient = new MongoClient('mongodb://127.0.0.1:27017/practice-final-exam-db', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// });

// DbClient.connect(err,db => {
//     if (err) {
//         console.error('err occured: ', err);
//         process.exit(-1);
//     }

//     console.log('Successfully connected to Mongo DB...');
// });

// module.exports = DbClient;


const mongoose = require('mongoose');

const dbConnect = () => {
    mongoose.connect('mongodb://localhost:27017/practice-final-exam-db', () => console.log('Connected to database'));
}

module.exports = dbConnect;