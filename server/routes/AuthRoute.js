const mongoose = require("mongoose");
const passport = require("passport");

const {
    generateAccessToken,
    authenticate,
    respond
} = require("../middleware/AuthMiddleware");

const User = require("../models/User");

module.exports = (app) => {
    // register user
    app.post("/account/register", (req, res) => {       
        User.register(
            new User({ username: req.body.email }), req.body.password,
            function (err, account) {
                if (err) {
                    res.send(err);
                }
                passport.authenticate("local", { session: false }) (req, res, () => {
                    res.status(200).send("Successfully Created Account!");
                });
            }
        );
    });

    // login user
    app.post(
        "/account/login",
        passport.authenticate("local", { session: false, scope: [] }),
        generateAccessToken,
        respond
    );

   //get all users
    app.get("/account/all", (req,res) => {    
                User.find({}, (err, Users) => {
                    if (err) {
                        console.log('Error', err);
                    }
                    return res.json(Users);
                });
    });

    //get current user
    app.get("/account/me", authenticate, (req, res) => {
        res.status(200).json(req.user);
    });

    //logout 
    app.get('/logout', function(req, res){
        req.logout();
        res.redirect('/signIn')
    });
};