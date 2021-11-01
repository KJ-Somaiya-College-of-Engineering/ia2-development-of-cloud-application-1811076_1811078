const config = require("../config/auth.config");
const db = require("../models");
const User = db.user;

var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

const generateToken = (userId) => {
    return jwt.sign({
        id: userId
    }, config.secret, {
        expiresIn: (86400 * 7) // 1 week
    });
}

const isValidPassword = (validPassword, enteredPassword) => {
    return bcrypt.compareSync(
        enteredPassword,
        validPassword
    );
}

exports.signup = (req, res) => {
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 8),
        joiningDate: req.body.joiningDate
    });

    user.save(err => {
        if (err) {
            res.status(500).send({
                message: "Something went wrong at our side!",
                error: err
            });
            return;
        }
        res.status(200).send({
            message: "User was registered successfully!"
        });
    });
};

exports.signin = (req, res) => {
    User.findOne({
        email: req.body.email
    })
    .exec((err, user) => {
        if (err) {
            res.status(500).send({
                message: "Something went wrong at our side!",
                error: err
            });
            return;
        }

        if (!user) {
            return res.status(404).send({
                message: "User Not found.",
                error: "User not found"
            });
        }

        if (!isValidPassword(user.password, req.body.password)) {
            return res.status(401).send({
                accessToken: null,
                message: "Invalid Password!",
                error: "Invalid Password"
            });
        }

        var token = generateToken(user.id);

        res.status(200).send({
            id: user._id,
            name: user.name,
            email: user.email,
            joiningDate: user.joiningDate,
            accessToken: token
        });
    });
};