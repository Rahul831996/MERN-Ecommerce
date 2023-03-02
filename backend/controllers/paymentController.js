const  catchAsyncError = require("../middleware/catchAsyncError");
require('dotenv').config({ path: '../config.env' });

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);



exports.processPayment = catchAsyncError(async (req, res, next) => {
    const myPayment = await stripe.paymentIntents.create({
        amount:req.body.amount,
        currency:"inr",
        metadata: {
            integration_check: "accept__payment",
            company: "Fecommerce",
        },
    })

    res.status(200).json({
        success:true,
        client_secret: myPayment.client_secret,

    })
})



exports.sendStripeApiKey = catchAsyncError(async(req, res, next) => {
    res.status(200).json({
         stripeApiKey: process.env.STRIPE_API_KEY,
        })
})      




// This example sets up an endpoint using the Express framework.
// Watch this video to get started: https://youtu.be/rPR2aJ6XnAc.


// const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)

// exports.processPayment = async (req, res) => {
//   const session = await stripe.paymentIntents.create({
//     line_items: [
//       {
//         : {
//           currency: 'inr',
//           product:req.body.product,
//           amount: req.body.amount,
//         },
//         quantity: req.body.quantity,
//       },
//     ],
//     mode: 'payment',
//   });

// //   res.redirect(303, session.url);
//       res.status(200).json({
//         success:true,
//         client_secret: session.client_secret,

//     })
// };



// exports.sendStripeApiKey = catchAsyncError(async(req, res, next) => {
//     res.status(200).json({
//          stripeApiKey: process.env.STRIPE_API_KEY,
//         })
// })