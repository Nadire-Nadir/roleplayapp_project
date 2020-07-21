const mongoose = require('mongoose');
const { Schema } = mongoose;

const ProfileSchema = new Schema ({
    currentUserId: String,
    myCharacters: [{
        name: String,
        race: String,
        class: String,
        level: Number,
        strenth: Number,
        dexterity: Number,
        constitution: Number,
        intelligence: Number,
        wisdom: Number,
        charisma: Number
    }]
});


module.exports = mongoose.model("Profile",ProfileSchema);