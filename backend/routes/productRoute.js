const express = require("express");

const {createProduct,getAllProduct,getAdminProducts, getProductDetails, updateProduct, deleteProduct, createProductReview, getProductReview, deleteProductReview} = require('../controllers/productController');

 
const {isAuthenticatedUser,authorizeRoles } = require("../middleware/authenticate");



const router = express.Router();

//get All Products by everyone
router.route("/products").get(getAllProduct)

// Create new Products
router.route("/admin/product/new").post(isAuthenticatedUser,authorizeRoles("admin"),createProduct)

//get Products by Admin only
router.route("/admin/products").get(isAuthenticatedUser,authorizeRoles("admin"),getAdminProducts)


//get Product Details by Id
router.route("/product/:id").get(getProductDetails)


//Update Product By Admin only  or Delete product  Admin only
router.route("/admin/product/:id").put(isAuthenticatedUser,authorizeRoles("admin"),updateProduct) 
.delete(isAuthenticatedUser,authorizeRoles("admin"),deleteProduct)
 

// create review  user
router.route("/review").put(isAuthenticatedUser,createProductReview)

// get All Reviews of product  and delete also
router.route("/reviews").get(getProductReview).delete(deleteProductReview);

 



module.exports = router;
