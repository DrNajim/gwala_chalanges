const mongoose = require("mongoose")
const QuestionSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    answers: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Answer'
    }],
    likes: [{
        type: Boolean,
        likes_id: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }],
    createdAt: {
        type: Date,
        default: new Date(),
    },
});

const QuestionModel = mongoose.model("Question", QuestionSchema)
module.exports = QuestionModel 