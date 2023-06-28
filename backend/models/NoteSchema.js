const mongoose = require("mongoose");

const noteSchema = new mongoose.Schema({
    date: {
        type:String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
    },
    createdOn: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model("Note", noteSchema)
