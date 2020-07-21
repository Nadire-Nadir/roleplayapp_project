const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require("passport");

const LocalStrategy = require("passport-local").Strategy;

if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();   
}

try {
    mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/fullstack_project', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }, () =>
    console.log("Connected..."));
} catch (error) {
    console.log("could not connect!");
};


const app = express();    

app.use(bodyParser.json());

app.use(passport.initialize());

let User = require('./models/User');

passport.use(
    new LocalStrategy(
        {
            usernameField: "email",
            passwordField: "password",
        },

        User.authenticate()
    )
);

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

require('./routes/AuthRoute')(app);
require('./routes/CharacterRoute')(app);
require('./routes/UsersListRoute')(app);



app.get('/', (req,res) => {
    res.send("welcome to backend")
})

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Example app listening at http://localhost: ${PORT}`));
