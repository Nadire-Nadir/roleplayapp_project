const mongoose = require('mongoose');
const { Schema } = mongoose;

const MyCharacterSchema = new Schema ({
    name: String,
    race: String,
    class: String,
    level: Number,
    strength: Number,
    dexterity: Number,
    constitution: Number,
    intelligence: Number,
    wisdom: Number,
    charisma: Number
});


module.exports = mongoose.model("MyCharacter",MyCharacterSchema);