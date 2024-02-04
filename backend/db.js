const mongoose = require('mongoose');
const mongoURI = "mongodb://localhost:27017/";

const connectToMongo = () => {
    mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });

    const db = mongoose.connection;

    db.on('error', (err) => {
        console.error('MongoDB connection error:', err);
    });

    db.once('open', () => {
        console.log('Connected to MongoDB successfully');
    });
};

module.exports = connectToMongo;
