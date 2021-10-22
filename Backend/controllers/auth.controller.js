const config = require("../config/auth.config");
const db = require("../models");
const User = db.user;

var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

exports.signup = (req, res) => {
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 8),
        joiningDate: req.body.joiningDate
    });

    user.save((err, user) => {
        if (err) {
            console.log("Error while saving new user!");
            res.status(500).send({
                message: "Something went wrong at our side!",
                error: err
            });
            return;
        }

        user.save(err => {
            if (err) {
                res.status(500).send({
                    message: "Something went wrong at our side!",
                    error: err
                });
                return;
            }
            res.send({
                message: "User was registered successfully!"
            });
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

            var passwordIsValid = bcrypt.compareSync(
                req.body.password,
                user.password
            );

            if (!passwordIsValid) {
                return res.status(401).send({
                    accessToken: null,
                    message: "Invalid Password!",
                    error: "Invalid Password"
                });
            }

            var token = jwt.sign({
                id: user.id
            }, config.secret, {
                expiresIn: (86400 * 7) // 1 week
            });

            res.status(200).send({
                id: user._id,
                name: user.name,
                email: user.email,
                joiningDate: user.joiningDate,
                accessToken: token
            });
        });
};