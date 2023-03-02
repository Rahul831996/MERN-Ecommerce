const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const errorMiddleware = require("./middleware/error");
const cookieParser = require("cookie-parser");
const fileUpload = require("express-fileupload");
const path = require("path")

// config
if (process.env.NODE_ENV !== "PRODUCTION") {
    require("dotenv").config({path:"backend/config/config.env"})
  }


app.use(express.json({limit: '50mb'}));
app.use(express.json());
app.use(cookieParser());
  
app.use(bodyParser.urlencoded({ extended: true}));
app.use(fileUpload());
 
 

// product
const product = require("./routes/productRoute")

//user
const user = require("./routes/userRoute");

//order
const order = require("./routes/orderRoute")

//payment
const payment = require("./routes/paymentRoute")

app.use('/api/v1',product);

app.use('/api/v1',user);

app.use('/api/v1',order)

app.use('/api/v1',payment)




 



// production build

app.use(express.static(path.join(__dirname, "../frontend/build")));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../frontend/build/index.html"));
});


 




// Middleware for error
app.use(errorMiddleware);

module.exports = app;
