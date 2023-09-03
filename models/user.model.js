const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
    user_id: {
        type: "string",
        required: true,
    },
    name: {
        type: "string",
        required: true,
    },
    email: {
        type: "string",
        required: true,
    },
    password: {
        type: "string",
        required: true,
    }
});
module.exports = mongoose.model("users", UserSchema);