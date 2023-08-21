const mongoose = require('mongoose');

const connectDB = (dbURI) => {
    mongoose.connect(dbURI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log(`Connected to database: ${dbURI}`);
    })
    .catch((error) => {
        console.error(`Database connection error: ${error}`);
    });
};

module.exports = connectDB;
