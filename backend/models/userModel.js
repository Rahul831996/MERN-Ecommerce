const mongoose = require("mongoose");
const { default: isEmail } = require('validator/lib/isemail');
const validate = require("validator");
const bcryptjs = require("bcryptjs")
const jwt = require("jsonwebtoken");
const crypto = require("crypto");




const userSchema = new mongoose.Schema({

    name: {
        type:String,
        required:[true,"please enter your name"],
        maxlength:[30,"name cannot exceed 30 characterd"],
    },
    email: {
        type:String,
        required:[true,"please enter your email"],
        unique:true,
        validate:[ isEmail,"please enter a valid email"],
    },
    password: {
        type:String,
        required:[true,"please enter your password"],
        minlength:[8,"password should be greater than 8 characters"],
        select: false,
    },
    avatar: {
        public_id: {
            type:String,
            required:true,
        },
        url: {
            type: String,
            required:true,
        } 
    },
    role: {
        type:String,
        default:"User",
    },
    createdAt: {
        type:Date,
        default:Date.now,
    },

    resetPasswordToken: String,
    resetPasswordExpire: Date,

});


// password to covert in hash
userSchema.pre("save", async function(next) {

    if(!this.isModified("password")) {
        next();
    }

    this.password = await bcryptjs.hash(this.password, 8);
})

//JWT Token
userSchema.methods.getJWTToken = function() {
    return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRE,
    })
}

// comparePassword
userSchema.methods.comparePassword = async function(password) {
    return await bcryptjs.compare(password, this.password);
}

// generating reset password token
userSchema.methods.getResetPassswordToken = function () {

    // Generating  token
    const resetToken = crypto.randomBytes(20).toString("hex");

  // Hashing and adding resetPasswordToken to userSchema

    this.resetPasswordToken = crypto
    .createHash("sha256")
    .update(resetToken)
    .digest("hex")

    // Hashing and Adding  getResetPassswordToken  to  userShema
    this.resetPasswordExpire = Date.now() + 30 * 60 * 1000;
    
    return resetToken;
}



module.exports = mongoose.model("User",userSchema);