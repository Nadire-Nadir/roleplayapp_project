const mongoose = require('mongoose');
const { Schema } = mongoose;
const passportLocalMongoose = require("passport-local-mongoose");

const User = new Schema({
    email: String,
    password: String

});

User.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", User);