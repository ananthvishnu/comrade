const mongoose = require("mongoose");

const reportSchema = new mongoose.Schema({
    name: {
        type:String,
        required: true
    },
    subject: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    message: {
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

module.exports = mongoose.model("Report", reportSchema)