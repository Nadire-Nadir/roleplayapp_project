const mongoose = require('mongoose');

const MyCharacter = require("../models/MyCharacter");

module.exports = (app) => {
    app.post("/create-character",(req,res) => {
        let newCharacter = new MyCharacter();

        newCharacter.name = req.body.name;
        newCharacter.race = req.body.race;
        newCharacter.class = req.body.class;
        newCharacter.level = req.body.level;
        newCharacter.strength = req.body.strength;
        newCharacter.dexterity = req.body.dexterity;
        newCharacter.constitution = req.body.constitution;
        newCharacter.intelligence = req.body.intelligence;
        newCharacter.wisdom = req.body.wisdom;
        newCharacter.charisma = req.body.charisma;


        newCharacter.save((err) => {
            if (err) {
                console.log('Error, err');
            }
            res.send({ message: "Character added!" });
        });
    });

    app.get("/all-characters", (req,res) => {
        MyCharacter.find({}, (err, MyCharacters) => {
            if (err) {
                console.log('Error', err);
            }
            return res.json(MyCharacters);
        });
    });

    app.delete("/character/:id", (req, res) => {
        MyCharacter.deleteOne({
            _id: req.params.id
        }, (err, MyCharacter) => {
            if (err) {
                console.log('Error', err);
            }
            return res.json({ message: "Character Deleted!"});
        })
    });

    app.get("/character/:id", (req,res) => {
        MyCharacter.findById(req.params.id, (err, Character) => {
            if (err) {
                console.log('Error', err);
            }
            return res.json(Character);
        });
    });


};