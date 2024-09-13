const mongoose = require('mongoose');

const connectDb = (url) => {
    mongoose.connect(url,  {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('Successfully connect to MongoDB.'))
    .catch(err => console.log('Connection error', err));
};

module.exports = connectDb;
