const app = require("./app");
const connecDataBase = require("./config/database")
const dotenv = require("dotenv");
const cloudinary = require("cloudinary")


// config
if (process.env.NODE_ENV !== "PRODUCTION") {
    require("dotenv").config({path:"backend/config/config.env"})
  }

// Handleing Unchatch Error  Exception liek..something wrong word writen in anywhere.

process.on("uncaughtException",(err) => {
    console.log(`Error: ${err.message}`);
    console.log("Shutting down the server due to unhandled promise rejection error");

    //calling server to exit from the below prosses will execute.
    process.exit(1);
     
});

 

// config
dotenv.config({path:"backend/config/config.env"});

 

// coming from database
connecDataBase();


// Cloudinary
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
})



// server varialbe
const server = app.listen(process.env.PORT, () => {
    console.log("server is working on localhost 4000");
    
});


// unhandle promise rejection error
process.on("unhandleRejection", () => {
    console.log(`Error : ${err.message}`);
    console.log("Shutting down the server due to unhandle promise rejection error");

    //calling server to exit from thr below process will execute.
    server.close(() => {
        process.exit(1);
    });
});