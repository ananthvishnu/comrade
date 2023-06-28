const mongoose = require("mongoose");
const dotenv = require("dotenv");
mongoose.set('strictQuery', false);

dotenv.config({
    path:"./config/.env"
})
const connectDatabase = () =>{
    mongoose.connect('mongodb+srv://vishnurathan106:vishnu1234@cluster0.ck4sjwt.mongodb.net/comrade?retryWrites=true&w=majority',{
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then((data) =>{
        console.log(`mongodb is connected with server: ${data.connection.host}`);
    })
}

module.exports = connectDatabase
