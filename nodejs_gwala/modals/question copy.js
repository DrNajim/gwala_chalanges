const mongoose = require("mongoose")
const TokenSchema = mongoose.Schema({
    userId: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: "user",
      },
      token: {
        type: String,
        required: true,
      },
      createdAt: {
        type: Date,
        default: Date.now,
        expires: 3600,// this is the expiry time
      },
});

const TokenModel = mongoose.model("Question", TokenSchema)
module.exports = TokenModel 