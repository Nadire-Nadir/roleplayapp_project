const jwt = require("jsonwebtoken");
const expressJwt = require("express-jwt");


const TOKENTIME = 60 * 30; 
const SECRET = "th1s I3 8eCre7";


let authenticate = expressJwt({ secret: SECRET });

let generateAccessToken = (req, res, next) => {
    req.token = req.token || {};
    req.token = jwt.sign(
        {
            id: req.user.id
        },
        SECRET,
        {
            expiresIn: TOKENTIME
        }
    );

    next();
};

let respond = (req, res) => {
    res.status(200).json({
        user: req.user.username,
        token: req.token
    });
};

module.exports = {
    authenticate,
    generateAccessToken,
    respond
};