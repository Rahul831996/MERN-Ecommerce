const mongoose = require("mongoose");
const dotenv = require("dotenv")
// mongoose is used to connect server to database
dotenv.config({path:"backend/config/config.env"});


const connecDataBase = () => {
    mongoose.connect(process.env.DB_URI,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
    }).then((data) => {
        console.log(`MongoDB is connected with : ${data.connection.host}`);
    }).catch((err) => {
        console.log(err, "mongoDB is not conected")
    })
};

module.exports = connecDataBase;



