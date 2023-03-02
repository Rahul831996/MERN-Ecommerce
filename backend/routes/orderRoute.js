const express = require("express");

const {newOrder,getSingleOrder, myOrder, getAllOrders,updateOrder, deleteOrder} = require("../controllers/orderController");

const router = express.Router()

const {isAuthenticatedUser, authorizeRoles} = require("../middleware/authenticate")

 

// create order
router.route("/order/new").post(isAuthenticatedUser, newOrder)

//get  Single Order
router.route("/order/:id").get(isAuthenticatedUser, getSingleOrder)

//  myOder
router.route("/orders/me").get(isAuthenticatedUser, myOrder)


// get  All orders  admin only
router.route("/admin/orders").get(isAuthenticatedUser,authorizeRoles("admin"),getAllOrders)

//updateOrder and Delete by Admin
router.route("/admin/order/:id").put(isAuthenticatedUser, authorizeRoles("admin"), updateOrder).delete(isAuthenticatedUser, authorizeRoles("admin"), deleteOrder)

 

module.exports = router;