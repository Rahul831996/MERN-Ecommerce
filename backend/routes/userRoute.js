const { Router } = require("express");
const express = require("express");
const {registerUser, loginUser, logoutUser, forgotPassword, resetPassword, getUserDetails,updatePassword, updateProfile, getSingleUser, updateUserRole, deleteUser, getAllUser} = require("../controllers/userController");

const {isAuthenticatedUser,authorizeRoles } = require("../middleware/authenticate");


const router = express.Router();


// Resiter user
router.route("/register").post(registerUser)

// Login User
router.route("/login").post(loginUser);

// logout user
router.route("/logout").get(logoutUser)

// forgot password 
router.route("/forgot/password").post(forgotPassword)

// Reset Password
router.route("/password/reset/:token").put(resetPassword)

//get user details
router.route("/me").get(isAuthenticatedUser, getUserDetails)

//update password
router.route("/password/update").put( isAuthenticatedUser, updatePassword)

//update user profile
router.route("/me/update").put(isAuthenticatedUser, updateProfile)

router
  .route("/admin/users")
  .get(isAuthenticatedUser,authorizeRoles ("admin"), getAllUser);

// get single user -- Admin
router.route("/admin/user/:id")
     .get(isAuthenticatedUser,authorizeRoles("admin") ,getSingleUser)
     .put(isAuthenticatedUser,authorizeRoles("admin") ,updateUserRole)
     .delete(isAuthenticatedUser,authorizeRoles("admin"),deleteUser)

module.exports = router;  