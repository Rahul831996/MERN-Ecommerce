const ErrorHandler = require("../utils/errorHandler");


module.exports = ( err, req, res, next) => {
    err.statusCode = err.statusCode  || 500;
    err.message = err.message  ||  "Internal Server Error";


    // mongooDB  Cast  id Errors
    if (err.name === "CastError") {
        const message = `Resorce Not Found or Invalid: ${err.path}`;
        err = new ErrorHandler(message, 400);
    }


    //mongoose  Duplicate Kry Errors
    if(err.code === 11000) {
        const message = `Duplicate ${Object.keys(err.keyValue)} Entered`
        err = new ErrorHandler(message, 400)
    }


    //Wrong JWT token
    if (err.name === "jsonWebTokenError") {
        const message = "Json Web Token is invalid, Plaese try again";
        err = new ErrorHandler(message, 400);
    }


    // JWT EXPIRE Error
    if (err.name === "TokenExpireError") {
        const message = "Json Web Token is invalid, Plaese try agai";
        err = new ErrorHandler(message, 400);
    }

    res.status(err.statusCode).json({
        success:false,
        message: err.message,
    });


}   