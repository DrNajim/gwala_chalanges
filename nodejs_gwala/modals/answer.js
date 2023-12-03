const mongoose = require("mongoose")
const AnswerSchema = mongoose.Schema({
    content: {
        type: String,
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    createdAt: {
        type: Date,
        default: new Date(),
    },
});

const AnswerModel = mongoose.model("Answer", AnswerSchema)
module.exports = AnswerModel
