const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    images:[
        {
            public_id:{
                type:String,
                required:true,
            },
            url:{
                type:String,
                required:true,
            },
        }
    ],
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
    },
    createdOn: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model("Blog", blogSchema)