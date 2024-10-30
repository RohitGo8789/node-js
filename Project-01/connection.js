const mongoose = require("mongoose");

//Connection of mongodb
async function connectMongoDb(url) {
    return mongoose.connect(url);
}

module.exports = {
    connectMongoDb,
};