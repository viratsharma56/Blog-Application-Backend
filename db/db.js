const mongoose = require('mongoose');

const url = "mongodb://localhost:27017/blog-application?&readPreference=primary&appname=MongoDB%20Compass&ssl=false"

const Connect = async() => {
    try {
        await mongoose.connect(url);
        console.log("Mongo DB connected");
    } catch (error) {
        console.log("Error with connecting mongoDB", error);
    }
}

module.exports = Connect;