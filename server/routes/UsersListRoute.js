const mongoose = require('mongoose');

const User = require("../models/User");

module.exports = (app) => {
    
    app.get("/account/all", (req,res) => {    
        User.find({}, (err, Users) => {
            if (err) {
                console.log('Error', err);
            }
            return res.json(Users);
        });
    });

    app.delete("/account/:id", (req, res) => {
        User.deleteOne({
            _id: req.params.id
        }, (err, user) => {
            if (err) {
                console.log('Error', err);
            }
            return res.json({ message: "User Deleted!"});
        })
    });
};