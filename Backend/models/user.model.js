const mongoose = require("mongoose");

const User = mongoose.model(
    "User",
    new mongoose.Schema({
        name: String,
        email: String,
        password: String,
        joiningDate: Date
    })
);

module.exports = User;