const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const UserSchema = mongoose.Schema({
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: new Date(),
    },
});

UserSchema.pre("save", async function () {
    this.password = await bcrypt.hash(this.password, 12);
});

const UserModel = mongoose.model("User", UserSchema);
module.exports = UserModel;
